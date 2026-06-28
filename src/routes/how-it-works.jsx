import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { steps } from "@/lib/site-data";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Crystal House Maid Service" },
      {
        name: "description",
        content:
          "Four simple steps to hire a verified, trained domestic professional in Bengaluru.",
      },
      { property: "og:title", content: "How It Works — Crystal House" },
      { property: "og:url", content: "/how-it-works" },
    ],

    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: How,
});

function How() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Hire trusted staff in 4 simple steps."
        description="From the first call to onboarding — we make domestic staffing effortless."
      />

      <section className="container-page py-16">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {steps.map((s) => (
            <motion.li
              key={s.n}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="list-none relative rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="font-display text-5xl font-bold text-gold/70">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.li>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Start Now</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
