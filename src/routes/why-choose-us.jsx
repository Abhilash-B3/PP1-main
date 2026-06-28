import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Clock,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Stagger, staggerItem } from "@/components/site/Reveal";
import { whyChoose } from "@/lib/site-data";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Crystal House Maid Service" },
      {
        name: "description",
        content:
          "Background verified staff, 4+ years of experience, quick replacement and city-wide coverage in Bengaluru.",
      },
      { property: "og:title", content: "Why Choose Crystal House" },
      { property: "og:url", content: "/why-choose-us" },
    ],

    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: Why,
});

const icons = [Star, ShieldCheck, BadgeCheck, HeartHandshake, Wallet, Clock, Sparkles, MapPin];

function Why() {
  return (
    <>
      <PageHero
        eyebrow="Why Crystal House"
        title="The reasons families choose us, again and again."
        description="Eight reasons we've become a trusted name in Bengaluru's domestic staffing."
      />

      <section className="container-page py-16">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {whyChoose.map((w, i) => {
            const Icon = icons[i];
            return (
              <motion.article
                key={w.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </section>
    </>
  );
}
