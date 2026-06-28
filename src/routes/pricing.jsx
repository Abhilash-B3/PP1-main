import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, staggerItem, Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Crystal House Maid Service" },
      {
        name: "description",
        content:
          "Transparent pricing for housemaids, cooks, nannies and elder care in Bengaluru. Part-time, full-time and live-in plans.",
      },
      { property: "og:title", content: "Pricing — Crystal House Maid Service" },
      { property: "og:url", content: "/pricing" },
    ],

    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Part-Time",
    tag: "1–4 hours / day",
    features: [
      "Single or split visits",
      "Cleaning, washing, utensils",
      "Verified & trained staff",
      "Quick replacement support",
    ],
  },
  {
    name: "Full-Time",
    tag: "8–10 hours / day",
    featured: true,
    features: [
      "Daily housekeeping & cooking",
      "Childcare & elder support add-ons",
      "Weekly off as per agreement",
      "Priority replacement support",
    ],
  },
  {
    name: "Live-In",
    tag: "24×7 with stay",
    features: [
      "Stays at your home",
      "Japa, elder & baby care",
      "Customised meal & care plans",
      "Dedicated relationship manager",
    ],
  },
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Affordable, transparent pricing — no hidden charges."
        description="Final pricing depends on the service category, hours and your locality. Share your requirement and we'll send a custom quote in minutes."
      />

      <section className="container-page py-16">
        <Stagger className="grid gap-6 md:grid-cols-3" stagger={0.12}>
          {plans.map((p) => (
            <motion.article
              key={p.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`relative rounded-3xl border bg-card p-8 ${
                p.featured
                  ? "border-primary shadow-elegant ring-1 ring-primary/30"
                  : "border-border shadow-soft"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.tag}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-primary">Custom</span>
                <span className="text-sm text-muted-foreground">/ quote</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full" variant={p.featured ? "default" : "outline"}>
                <Link to="/contact">Request Quote</Link>
              </Button>
            </motion.article>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Pricing varies by service, hours, frequency and location within Bengaluru. We promise
            honest, upfront numbers with no surprises.
          </p>
        </Reveal>
      </section>
    </>
  );
}
