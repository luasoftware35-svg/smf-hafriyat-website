"use client";

import { useEffect, useRef, type RefObject } from "react";

type Particle = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  baseSize: number;
  alpha: number;
};

type WebGLFoundationFieldProps = {
  className?: string;
  mouseRef?: RefObject<{ x: number; y: number; active: boolean }>;
};

export function WebGLFoundationField({ className, mouseRef: externalMouseRef }: WebGLFoundationFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const localMouseRef = useRef({ x: 0.5, y: 0.5, active: false });
  const mouseRef = externalMouseRef ?? localMouseRef;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
    if (!gl) return;

    const vsSource = `
      attribute vec2 a_position;
      attribute float a_size;
      attribute float a_alpha;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      varying float v_alpha;
      void main() {
        vec2 pos = a_position;
        vec2 toMouse = u_mouse - pos;
        pos += toMouse * 0.035 * sin(u_time * 0.8 + pos.x * 0.01);
        vec2 clip = (pos / u_resolution) * 2.0 - 1.0;
        clip.y *= -1.0;
        gl_Position = vec4(clip, 0.0, 1.0);
        gl_PointSize = a_size;
        v_alpha = a_alpha;
      }
    `;

    const fsSource = `
      precision mediump float;
      varying float v_alpha;
      uniform vec3 u_color;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = 1.0 - smoothstep(0.0, 0.5, length(c));
        if (d < 0.01) discard;
        gl_FragColor = vec4(u_color, d * v_alpha);
      }
    `;

    const context = gl;

    function compile(type: number, source: string) {
      const shader = context.createShader(type);
      if (!shader) return null;
      context.shaderSource(shader, source);
      context.compileShader(shader);
      if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
        context.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compile(context.VERTEX_SHADER, vsSource);
    const fs = compile(context.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = context.createProgram();
    if (!program) return;
    context.attachShader(program, vs);
    context.attachShader(program, fs);
    context.linkProgram(program);
    if (!context.getProgramParameter(program, context.LINK_STATUS)) return;

    const aPosition = context.getAttribLocation(program, "a_position");
    const aSize = context.getAttribLocation(program, "a_size");
    const aAlpha = context.getAttribLocation(program, "a_alpha");
    const uResolution = context.getUniformLocation(program, "u_resolution");
    const uMouse = context.getUniformLocation(program, "u_mouse");
    const uTime = context.getUniformLocation(program, "u_time");
    const uColor = context.getUniformLocation(program, "u_color");

    const count = reduceMotion ? 36 : 72;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.0004,
      vy: (Math.random() - 0.5) * 0.0004,
      baseSize: 2 + Math.random() * 5,
      alpha: 0.15 + Math.random() * 0.45,
    }));

    const positions = new Float32Array(count * 2);
    const sizes = new Float32Array(count);
    const alphas = new Float32Array(count);

    const positionBuffer = context.createBuffer();
    const sizeBuffer = context.createBuffer();
    const alphaBuffer = context.createBuffer();
    if (!positionBuffer || !sizeBuffer || !alphaBuffer) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width * dpr));
      height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.width = width;
      canvas.height = height;
      context.viewport(0, 0, width, height);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const onLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    if (!externalMouseRef) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
    }

    const draw = (now: number) => {
      const time = (now - start) * 0.001;
      const mouse = mouseRef.current;
      const targetX = mouse.active ? mouse.x * width : width * 0.5 + Math.sin(time * 0.4) * width * 0.12;
      const targetY = mouse.active ? mouse.y * height : height * 0.45 + Math.cos(time * 0.35) * height * 0.08;

      for (let i = 0; i < count; i += 1) {
        const p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }

        const px = p.x * width;
        const py = p.y * height;
        const depth = 0.55 + p.z * 0.45;
        positions[i * 2] = px;
        positions[i * 2 + 1] = py;
        sizes[i] = p.baseSize * depth * (width / 900);
        alphas[i] = p.alpha * depth;
      }

      context.clearColor(0, 0, 0, 0);
      context.clear(context.COLOR_BUFFER_BIT);
      context.enable(context.BLEND);
      context.blendFunc(context.SRC_ALPHA, context.ONE_MINUS_SRC_ALPHA);
      context.useProgram(program);

      if (uResolution) context.uniform2f(uResolution, width, height);
      if (uMouse) context.uniform2f(uMouse, targetX, targetY);
      if (uTime) context.uniform1f(uTime, time);
      if (uColor) context.uniform3f(uColor, 0.96, 0.63, 0.13);

      context.bindBuffer(context.ARRAY_BUFFER, positionBuffer);
      context.bufferData(context.ARRAY_BUFFER, positions, context.DYNAMIC_DRAW);
      context.enableVertexAttribArray(aPosition);
      context.vertexAttribPointer(aPosition, 2, context.FLOAT, false, 0, 0);

      context.bindBuffer(context.ARRAY_BUFFER, sizeBuffer);
      context.bufferData(context.ARRAY_BUFFER, sizes, context.DYNAMIC_DRAW);
      context.enableVertexAttribArray(aSize);
      context.vertexAttribPointer(aSize, 1, context.FLOAT, false, 0, 0);

      context.bindBuffer(context.ARRAY_BUFFER, alphaBuffer);
      context.bufferData(context.ARRAY_BUFFER, alphas, context.DYNAMIC_DRAW);
      context.enableVertexAttribArray(aAlpha);
      context.vertexAttribPointer(aAlpha, 1, context.FLOAT, false, 0, 0);

      context.drawArrays(context.POINTS, 0, count);

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      if (!externalMouseRef) {
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerleave", onLeave);
      }
      context.deleteProgram(program);
      context.deleteShader(vs);
      context.deleteShader(fs);
      context.deleteBuffer(positionBuffer);
      context.deleteBuffer(sizeBuffer);
      context.deleteBuffer(alphaBuffer);
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
