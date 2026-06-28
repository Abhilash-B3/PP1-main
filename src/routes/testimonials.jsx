import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, staggerItem } from "@/components/site/Reveal";
import { testimonials } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Crystal House Maid Service" },
      {
        name: "description",
        content: "Real reviews from Bengaluru families about Crystal House Maid Service.",
      },
      { property: "og:title", content: "Testimonials — Crystal House" },
      { property: "og:url", content: "/testimonials" },
    ],

    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Hear it from our families."
        description="A few words from families we have proudly served across Bengaluru."
      />

      <section className="container-page py-16">
        <Stagger className="grid gap-6 md:grid-cols-2" stagger={0.1}>
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-lg leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> — {t.area}, Bengaluru</span>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </section>
    </>
  );
}
