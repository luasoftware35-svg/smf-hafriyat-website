"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { projectCategories, projects, type ProjectCategory } from "@/lib/constants/projects";
import { getProjectImagesByIndex } from "@/lib/constants/images";

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filtered = filter === "all" ? projects.slice(0, 4) : projects.filter((p) => p.category === filter).slice(0, 4);

  return (
    <Section id="projeler" variant="muted">
      <Container>
        <FadeIn>
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Referans Projeler"
              title="Sahada bıraktığımız izler"
              description="Derin temel kazısından enkaz kaldırmaya — ekskavatör filomuzla tamamladığımız işlerin öncesi ve sonrası."
            />
            <Button href="/projeler" variant="secondary">Tüm Projeler</Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mb-8 flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFilter(cat.value)}
                className={`min-h-11 rounded-sm px-5 py-2 text-sm font-medium transition-all ${
                  filter === cat.value
                    ? "bg-accent text-accent-foreground shadow-card scale-105"
                    : "border border-surface bg-bg-primary text-text-secondary hover:border-accent hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {filtered.map((project, index) => {
              const projectIndex = projects.findIndex((p) => p.slug === project.slug);
              const imgs = getProjectImagesByIndex(projectIndex >= 0 ? projectIndex : index);
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card hover={false} className="overflow-hidden">
                    <BeforeAfterSlider
                      beforeSrc={imgs.before}
                      afterSrc={imgs.after}
                      beforeAlt={`${project.title} — öncesi`}
                      afterAlt={`${project.title} — sonrası`}
                      autoDemo={index === 0}
                    />
                    <div className="p-6">
                      <p className="font-mono text-xs uppercase tracking-wider text-accent">{project.location}</p>
                      <h3 className="mt-2 font-heading text-xl text-text-primary">
                        <Link href={`/projeler/${project.slug}`} className="hover:text-accent">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
