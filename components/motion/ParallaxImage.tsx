"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useRef } from "react";

type ParallaxImageProps = Omit<ImageProps, "fill"> & {
  containerClassName?: string;
};

export function ParallaxImage({ containerClassName, className, alt, ...props }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName ?? ""}`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image alt={alt} fill className={className} {...props} />
      </motion.div>
    </div>
  );
}
