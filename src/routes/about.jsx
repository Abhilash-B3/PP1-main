import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Crystal House Maid Service — Bengaluru" },
      {
        name: "description",
        content:
          "Learn about Crystal House Maid Service — 4+ years of trusted domestic staffing in Bengaluru. Our vision, mission and values.",
      },
      { property: "og:title", content: "About Crystal House Maid Service" },
      { property: "og:url", content: "/about" },
    ],

    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  "Trust",
  "Professionalism",
  "Quality",
  "Reliability",
  "Transparency",
  "Customer Satisfaction",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Bengaluru's trusted home for trained domestic staff."
        description={`For ${site.years} years, Crystal House Maid Service has been helping Bengaluru families find verified, trained and reliable domestic professionals.`}
      />

      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <Reveal direction="left">
            <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Our Vision
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                To become Bengaluru's most trusted domestic staffing company.
              </h2>
              <p className="mt-3 text-muted-foreground">
                We aim to set the benchmark for reliable, professional and quality home services
                across the city.
              </p>
            </article>
          </Reveal>
          <Reveal direction="right">
            <article className="h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Our Mission
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                Trained, verified staff with dependable service.
              </h2>
              <p className="mt-3 text-muted-foreground">
                We provide trained, verified and experienced domestic staff while ensuring customer
                satisfaction, safety and dependability in every engagement.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border border-border bg-primary-soft/50 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Core Values
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">What we stand for</h2>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3" stagger={0.08}>
              {values.map((v) => (
                <motion.div
                  key={v}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium">{v}</span>
                </motion.div>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </section>
    </>
  );
}
