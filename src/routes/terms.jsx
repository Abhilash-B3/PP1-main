import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Crystal House Maid Service" },
      {
        name: "description",
        content: "Terms governing the use of Crystal House Maid Service and our website.",
      },
      { property: "og:url", content: "/terms" },
    ],

    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />
      <section className="container-page py-14">
        <article className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
          <p>
            By engaging Crystal House Maid Service, you agree to the terms below. We aim to keep
            them simple and fair to both customers and staff.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">1. Services</h2>
          <p>
            We provide trained, verified domestic staff on a part-time, full-time or live-in basis.
            Service scope, hours and pricing are agreed upfront for every engagement.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">2. Payments</h2>
          <p>
            Payments are due as per the agreed schedule. Charges, advances and refunds are explained
            before placement.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">3. Replacement</h2>
          <p>
            If you are not satisfied with the assigned staff, we provide a replacement within the
            agreed support window.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">
            4. Customer responsibilities
          </h2>
          <p>
            Customers agree to treat all staff with respect, provide a safe working environment and
            adhere to the agreed working hours.
          </p>
          <h2 className="font-display text-xl font-semibold text-foreground">5. Liability</h2>
          <p>
            Crystal House Maid Service acts as a staffing partner. While we verify and train every
            professional, day-to-day supervision rests with the customer.
          </p>
          <p className="text-sm">For any questions, please contact our team.</p>
        </article>
      </section>
    </>
  );
}
