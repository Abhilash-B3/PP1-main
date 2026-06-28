import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Crystal House Maid Service" },
      {
        name: "description",
        content:
          "Housemaids, baby care, Japa maids, cooks, elder care and office housekeeping staff in Bengaluru. Part-time, full-time and live-in options.",
      },
      { property: "og:title", content: "Services — Crystal House Maid Service" },
      { property: "og:url", content: "/services" },
    ],

    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Every home need, handled by trained professionals."
        description="From daily cleaning to post-natal Japa care — choose from our six core services, available across Bengaluru."
      />

      <section className="container-page py-16">
        <div className="space-y-16">
          {services.map((s, i) => (
            <Reveal key={s.slug} direction={i % 2 === 0 ? "left" : "right"} amount={0.2}>
              <article
                className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1000}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    0{i + 1} — Service
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground">{s.description}</p>
                  <ul className="mt-5 space-y-2">
                    {[
                      "Background verified staff",
                      "Trained & experienced",
                      "Flexible engagement",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link to="/contact">Enquire Now</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/pricing">View Pricing</Link>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
