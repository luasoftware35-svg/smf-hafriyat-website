"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  highlightLast?: number;
  highlightClassName?: string;
};

export function TextReveal({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  highlightLast = 0,
  highlightClassName = "text-gradient-accent",
}: TextRevealProps) {
  const words = text.split(" ");
  const normalWords = highlightLast > 0 ? words.slice(0, -highlightLast) : words;
  const highlightWords = highlightLast > 0 ? words.slice(-highlightLast) : [];

  return (
    <Tag className={className}>
      {normalWords.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.42, delay: delay + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
      {highlightWords.length > 0 && (
        <span className={highlightClassName}>
          {highlightWords.map((word, index) => (
            <motion.span
              key={`hi-${word}-${index}`}
              initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.42,
                delay: delay + (normalWords.length + index) * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>
      )}
    </Tag>
  );
}
