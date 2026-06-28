import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-home.jpg";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, staggerItem } from "@/components/site/Reveal";
import { services, site, testimonials, whyChoose } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crystal House Maid Service — Trusted Domestic Staff in Bengaluru" },
      {
        name: "description",
        content:
          "Hire verified housemaids, cooks, nannies, Japa maids, elder-care attendants & office housekeeping staff in Bengaluru. 4+ years of trusted service.",
      },
      { property: "og:title", content: "Crystal House Maid Service — Bengaluru" },
      {
        property: "og:description",
        content: "Trusted. Trained. Top Quality. Domestic staffing across Bengaluru.",
      },
      { property: "og:url", content: "/" },
    ],

    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const EASE = [0.22, 1, 0.36, 1];

function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroImgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 70% at 10% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 60%), radial-gradient(50% 60% at 100% 100%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 60%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />

        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <motion.div style={{ y: heroTextY, opacity: heroOpacity }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" /> {site.tagline}
            </motion.span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground md:text-6xl">
              {["Trusted", "domestic", "staff", "for"].map((w, i) => (
                <span key={i} className="mr-3 inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.25 + i * 0.08 }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden">
                <motion.span
                  className="inline-block text-primary"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
                >
                  every Bengaluru home.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
              className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
            >
              Verified, trained and experienced housemaids, cooks, nannies, Japa maids and
              elder-care attendants — available part-time, full-time and live-in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button asChild size="lg">
                <Link to="/contact">
                  Book a Staff <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${site.phonePrimary}`}>Call {site.phones[0]}</a>
              </Button>
            </motion.div>

            <Stagger
              className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6"
              delay={1.2}
            >
              {[
                { k: "4+", v: "Years of Service" },
                { k: "5000+", v: "Happy Families" },
                { k: "100%", v: "Verified Staff" },
              ].map((s) => (
                <motion.div key={s.v} variants={staggerItem}>
                  <dt className="font-display text-2xl font-bold text-primary md:text-3xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</dd>
                </motion.div>
              ))}
            </Stagger>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.5 }}
          >
            <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
              <motion.img
                src={heroImg}
                alt="Beautifully cleaned Bengaluru home interior"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
                style={{ y: heroImgY, scale: heroImgScale }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.2 }}
              className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-soft md:block"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-gold/20 text-gold">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Background Verified</p>
                  <p className="text-xs text-muted-foreground">Every staff. No exceptions.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.35 }}
              className="absolute -top-6 -right-6 hidden rounded-2xl border border-border bg-card p-4 shadow-soft md:block float-slow"
            >
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Rated 4.9 by Bengaluru families</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeader
            eyebrow="What we offer"
            title="Premium home services, delivered with care"
            desc="From everyday cleaning to specialised post-natal and elder care — one trusted partner for every household need."
          />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {services.map((s) => (
            <motion.article
              key={s.slug}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-elegant"
            >
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>

      {/* WHY US */}
      <section className="border-y border-border bg-secondary/40 py-20">
        <div className="container-page">
          <Reveal>
            <SectionHeader
              eyebrow="Why Crystal House"
              title="The trusted choice for Bengaluru households"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {whyChoose.slice(0, 8).map((w, i) => {
              const Icon = [
                ShieldCheck,
                BadgeCheck,
                HeartHandshake,
                Clock,
                Sparkles,
                Star,
                BadgeCheck,
                ShieldCheck,
              ][i];
              return (
                <motion.div
                  key={w.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, boxShadow: "var(--shadow-elegant)" }}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-foreground">{w.title}</h4>
                  <p className="mt-1.5 text-sm text-muted-foreground">{w.desc}</p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS PEEK */}
      <section className="container-page py-20">
        <Reveal>
          <SectionHeader eyebrow="Loved by families" title="What our customers say" />
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.15}>
          {testimonials.slice(0, 2).map((t) => (
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
              <blockquote className="mt-4 font-display text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span> — {t.area}
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
        <Reveal delay={0.2}>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/testimonials">Read all reviews</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-page pb-20">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-3xl gradient-royal px-8 py-14 text-primary-foreground md:px-16 md:py-20">
            <motion.div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl"
              animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              aria-hidden
              className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl"
              animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                  Get started today
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">
                  Find your perfect home staff in 24 hours.
                </h2>
                <p className="mt-3 max-w-xl text-primary-foreground/85">
                  Share your requirement — we'll match a verified, trained professional from our
                  network.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/contact">Book a Staff</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <a href={`tel:${site.phonePrimary}`}>Call Us</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      )}
      <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-muted-foreground">{desc}</p>}
    </div>
  );
}
