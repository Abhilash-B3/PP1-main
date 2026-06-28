import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Briefcase } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Crystal House Maid Service" },
      {
        name: "description",
        content:
          "Apply to join Crystal House — opportunities for housemaids, cooks, nannies, Japa maids and caregivers in Bengaluru.",
      },
      { property: "og:title", content: "Careers — Crystal House" },
      { property: "og:url", content: "/careers" },
    ],

    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  role: z.string().trim().min(2, "Please enter the role").max(60),
  experience: z.string().trim().max(200).optional(),
  message: z.string().trim().max(500).optional(),
});

const roles = ["Housemaid", "Cook", "Nanny / Baby Care", "Japa Maid", "Elder Care", "Housekeeping"];

function Careers() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", role: "", experience: "", message: "" });

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
    const text = `Hi Crystal House, I'd like to apply.%0A%0AName: ${parsed.data.name}%0APhone: ${parsed.data.phone}%0ARole: ${parsed.data.role}%0AExperience: ${parsed.data.experience ?? "-"}%0AMessage: ${parsed.data.message ?? "-"}`;
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank");
    toast.success("Thank you! We'll contact you shortly.");
    setForm({ name: "", phone: "", role: "", experience: "", message: "" });
    setSubmitting(false);
  }

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the Crystal House family."
        description="If you are dedicated, trustworthy and ready to serve Bengaluru's families, we'd love to hear from you."
      />

      <section className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal direction="left">
            <div className="rounded-3xl border border-border bg-primary-soft/40 p-6 sm:p-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-semibold">
                We're hiring across roles
              </h2>
              <p className="mt-2 text-muted-foreground">
                We are continuously looking for verified, hardworking professionals for the
                following roles:
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm">
                {roles.map((r) => (
                  <li key={r} className="rounded-lg border border-border bg-card px-3 py-2">
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Prefer to call? Reach us at{" "}
                <a href={`tel:${site.phonePrimary}`} className="font-semibold text-primary">
                  {site.phones[0]}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form
              onSubmit={submit}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <h2 className="font-display text-2xl font-semibold">Job Application</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill the form below and we'll get in touch within 24 hours.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
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
                <div className="sm:col-span-1">
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
                  <Label htmlFor="role">Role applying for</Label>
                  <Input
                    id="role"
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                    required
                    maxLength={60}
                    placeholder="e.g. Cook"
                    className="mt-1.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="experience">Experience</Label>
                  <Input
                    id="experience"
                    value={form.experience}
                    onChange={(e) => update("experience", e.target.value)}
                    maxLength={200}
                    placeholder="e.g. 3 years in South Indian cooking"
                    className="mt-1.5"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Anything you'd like to share</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    maxLength={500}
                    rows={4}
                    className="mt-1.5"
                  />
                </div>
              </div>
              <Button type="submit" disabled={submitting} className="mt-6 w-full" size="lg">
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
