import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { services, site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Crystal House Maid Service — Bengaluru" },
      {
        name: "description",
        content:
          "Call, WhatsApp or send a service enquiry. We respond within minutes during business hours.",
      },
      { property: "og:title", content: "Contact Crystal House" },
      { property: "og:url", content: "/contact" },
    ],

    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Crystal House Maid Service",
          telephone: site.phones[0],
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: "#91, 1st Floor, Devagere, Kumbalagodu Post",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560074",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  service: z.string().trim().min(2).max(60),
  message: z.string().trim().max(800).optional(),
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: services[0].title,
    message: "",
  });

  function update(k, v) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const text = `Hi Crystal House, I'd like to enquire.%0A%0AName: ${parsed.data.name}%0APhone: ${parsed.data.phone}%0AEmail: ${parsed.data.email ?? "-"}%0AService: ${parsed.data.service}%0AMessage: ${parsed.data.message ?? "-"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", phone: "", email: "", service: services[0].title, message: "" });
    setSubmitting(false);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your perfect home staff."
        description="Call us, message on WhatsApp, or fill the enquiry form — we'll match a verified professional for your home."
      />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <Reveal direction="left" className="space-y-4">
            <a
              href={`tel:${site.phonePrimary}`}
              className="block rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Call us</p>
                  <p className="font-semibold">{site.phones[0]}</p>
                  <p className="font-semibold">{site.phones[1]}</p>
                </div>
              </div>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/20 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="font-semibold">{site.email}</p>
                </div>
              </div>
            </a>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Office</p>
                  <p className="text-sm">{site.address}</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Crystal House Maid Service location"
                src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </Reveal>

          <Reveal direction="right">
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <h2 className="font-display text-2xl font-semibold">Service Enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Share your requirement — we'll respond on WhatsApp or call within minutes.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    required
                    maxLength={80}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    required
                    maxLength={15}
                    className="mt-1.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email (optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={120}
                    className="mt-1.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="service">Service</Label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="mt-1.5 h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    {services.map((s) => (
                      <option key={s.slug}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Your Requirement</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    maxLength={800}
                    placeholder="e.g. Part-time housemaid, 2 hours per day, mornings preferred."
                    className="mt-1.5"
                  />
                </div>
              </div>
              <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full">
                {submitting ? "Sending..." : "Send Enquiry"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
