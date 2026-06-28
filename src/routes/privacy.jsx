import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Crystal House Maid Service" },
      {
        name: "description",
        content: "How Crystal House Maid Service collects, uses and protects your information.",
      },
      { property: "og:url", content: "/privacy" },
    ],

    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is maintained by Crystal House Maid Service to explain how we handle the information you share with us."
      />
      <section className="container-page py-14">
        <article className="prose prose-slate mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            We respect your privacy. The information you share with us — name, phone, email and
            service requirements — is used solely to respond to your enquiry, deliver services and
            improve your experience with Crystal House Maid Service.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Information we collect
          </h2>
          <p>
            Contact details and the requirement details you share via our enquiry, application or
            WhatsApp.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">How we use it</h2>
          <p>
            To match you with suitable staff, schedule services, communicate updates and provide
            customer support. We never sell your information to third parties.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Data security</h2>
          <p>
            We take reasonable measures to safeguard your data. Only authorised team members can
            access customer information for service delivery.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">Your choices</h2>
          <p>
            You can request deletion of your data or unsubscribe from communications at any time by
            writing to{" "}
            <a href={`mailto:${site.email}`} className="text-primary">
              {site.email}
            </a>
            .
          </p>
          <p className="text-sm">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long" })}.
          </p>
        </article>
      </section>
    </>
  );
}
