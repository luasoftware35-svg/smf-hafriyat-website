"use client";

import { useEffect, useRef, type RefObject } from "react";

type CursorTrailProps = {
  containerRef?: RefObject<HTMLElement | null>;
  className?: string;
  strokeColor?: string;
  shadowColor?: string;
};

export function CursorTrail({
  containerRef,
  className,
  strokeColor = "rgba(245, 160, 32, 0.38)",
  shadowColor = "rgba(245, 160, 32, 0.22)",
}: CursorTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduceMotion || !finePointer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const points: { x: number; y: number; time: number }[] = [];
    const maxAge = 360;
    const maxPoints = 24;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let isRunning = false;
    let raf = 0;

    const getRoot = () => containerRef?.current ?? document.body;
    const isSection = Boolean(containerRef);

    const resize = () => {
      const root = getRoot();
      const rect = isSection ? root.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);

      while (points.length && now - points[0].time > maxAge) {
        points.shift();
      }

      if (points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length - 1; i += 1) {
          const current = points[i];
          const next = points[i + 1];
          ctx.quadraticCurveTo(current.x, current.y, (current.x + next.x) / 2, (current.y + next.y) / 2);
        }

        const last = points[points.length - 1];
        ctx.lineTo(last.x, last.y);
        ctx.strokeStyle = strokeColor;
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = 6;
        ctx.lineWidth = 2.4;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      if (points.length) {
        raf = requestAnimationFrame(draw);
      } else {
        isRunning = false;
      }
    };

    const toLocal = (clientX: number, clientY: number) => {
      if (!isSection) return { x: clientX, y: clientY };
      const rect = getRoot().getBoundingClientRect();
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const addPoint = (clientX: number, clientY: number) => {
      if (isSection) {
        const rect = getRoot().getBoundingClientRect();
        if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) {
          points.splice(0, points.length);
          return;
        }
      }

      const { x, y } = toLocal(clientX, clientY);
      const lastPoint = points[points.length - 1];
      const distance = lastPoint ? Math.hypot(x - lastPoint.x, y - lastPoint.y) : Infinity;
      if (distance < 5) return;

      points.push({ x, y, time: performance.now() });
      if (points.length > maxPoints) points.shift();
      if (!isRunning) {
        isRunning = true;
        raf = requestAnimationFrame(draw);
      }
    };

    const onMove = (event: PointerEvent) => addPoint(event.clientX, event.clientY);
    const onLeave = () => points.splice(0, points.length);

    resize();
    const observer = isSection && containerRef?.current ? new ResizeObserver(resize) : null;
    observer?.observe(getRoot());

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [containerRef, strokeColor, shadowColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}
