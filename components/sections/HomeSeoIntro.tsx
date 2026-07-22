"use client";

import { useCallback, useRef } from "react";
import { Caveat } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { Interactive3DBlock } from "@/components/motion/Interactive3DBlock";
import { InteractiveKeyword } from "@/components/motion/InteractiveKeyword";
import { WebGLFoundationField } from "@/components/motion/WebGLFoundationField";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const scriptFont = Caveat({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
});

const sloganWords = ["Gelecek", "Sağlam", "Temellerde"];

function SloganWord({ word, index, reduceMotion }: { word: string; index: number; reduceMotion: boolean | null }) {
  return (
    <motion.span
      initial={reduceMotion ? false : { opacity: 0, rotateX: 40, z: -40 }}
      whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              scale: 1.1,
              y: -6,
              rotateZ: index % 2 === 0 ? 3 : -3,
              textShadow: "0 12px 36px rgba(245, 160, 32, 0.45)",
            }
      }
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "inline-block cursor-default will-change-transform",
        !reduceMotion && "transition-[filter] duration-300 hover:brightness-110",
      )}
      style={{
        transform: `translateZ(${12 + index * 10}px)`,
        textShadow: "0 8px 28px rgba(245, 160, 32, 0.22)",
      }}
    >
      {word}
    </motion.span>
  );
}

export function HomeSeoIntro() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  const syncPointer = useCallback((clientX: number, clientY: number, active: boolean) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = {
      x: (clientX - rect.left) / rect.width,
      y: (clientY - rect.top) / rect.height,
      active,
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Denizli hafriyat hakkında"
      className="relative overflow-hidden border-b border-surface bg-bg-primary py-10 lg:py-12"
      onPointerMove={(event) => syncPointer(event.clientX, event.clientY, true)}
      onPointerLeave={() => syncPointer(0, 0, false)}
    >
      <WebGLFoundationField className="pointer-events-none absolute inset-0 h-full w-full opacity-90" mouseRef={mouseRef} />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-[2]">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center [perspective:1200px]">
            <Interactive3DBlock
              className="relative mx-auto max-w-2xl rounded-2xl px-4 py-3 sm:px-6"
              intensity={reduceMotion ? 0.35 : 1}
              onPointerUpdate={syncPointer}
            >
              <p
                className={`${scriptFont.className} flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[2rem] leading-none text-accent sm:gap-x-4 sm:text-[2.35rem] md:text-[2.6rem]`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {sloganWords.map((word, index) => (
                  <SloganWord key={word} word={word} index={index} reduceMotion={reduceMotion} />
                ))}
              </p>
            </Interactive3DBlock>

            <motion.div
              className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-hidden="true"
            />

            <Interactive3DBlock
              className="relative mt-5 rounded-xl px-2 py-1 sm:px-4"
              intensity={reduceMotion ? 0.2 : 0.45}
              onPointerUpdate={syncPointer}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent" style={{ transform: "translateZ(12px)" }}>
                Hakkımızda
              </p>
              <p
                className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base"
                style={{ transform: "translateZ(18px)", transformStyle: "preserve-3d" }}
              >
                <InteractiveKeyword href="/hakkimizda" variant="strong">
                  {siteConfig.name}
                </InteractiveKeyword>
                , {siteConfig.foundedYear} yılından bu yana yıkım, hafriyat ve altyapı alanında faaliyet gösteren,{" "}
                {siteConfig.companyRegisteredYear} yılında {siteConfig.legalName} unvanıyla Denizli Merkezefendi&apos;de kurumsal
                kimliğine kavuşan bir inşaat hizmetleri firmasıdır. Ege Bölgesi&apos;nin önemli projelerinde yer alan firmamız,{" "}
                {siteConfig.yearsInBusiness} yılı aşkın sektör tecrübesiyle bugüne kadar 150&apos;nin üzerinde firmaya, 900&apos;ün
                üzerinde projede destek vermiştir.
              </p>
            </Interactive3DBlock>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
