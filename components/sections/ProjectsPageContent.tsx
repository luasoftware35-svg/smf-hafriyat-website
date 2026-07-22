"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/motion/FadeIn";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { projectCategories, projects, type ProjectCategory } from "@/lib/constants/projects";
import { getProjectImagesByIndex } from "@/lib/constants/images";

export function ProjectsPageContent() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Container className="py-16 lg:py-24">
      <FadeIn>
        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setFilter(cat.value)}
              className={`min-h-11 rounded-sm px-5 py-2 text-sm font-medium transition-all ${
                filter === cat.value
                  ? "bg-accent text-accent-foreground shadow-card scale-105"
                  : "border border-surface bg-bg-primary text-text-secondary hover:border-accent"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          {filtered.map((project, index) => {
            const projectIndex = projects.findIndex((p) => p.slug === project.slug);
            const imgs = getProjectImagesByIndex(projectIndex >= 0 ? projectIndex : index);
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
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
                    <h2 className="mt-2 font-heading text-xl text-text-primary">
                      <Link href={`/projeler/${project.slug}`} className="hover:text-accent">{project.title}</Link>
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-surface bg-bg-secondary/70 px-3 py-1 text-xs font-medium text-text-secondary">
                        Teslim ciktilari gorunur
                      </span>
                      <span className="rounded-full border border-surface bg-bg-secondary/70 px-3 py-1 text-xs font-medium text-text-secondary">
                        Kurumsal saha uygulamasi
                      </span>
                    </div>
                    <div className="mt-5 flex items-center gap-4">
                      <Link
                        href={`/projeler/${project.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-accent-secondary"
                      >
                        Proje detayini gor
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                      <Link
                        href="/iletisim"
                        className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                      >
                        Benzer proje icin teklif iste
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}
