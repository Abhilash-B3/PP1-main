import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site-data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi Crystal House, I'd like to enquire about your services.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full text-white shadow-elegant transition-transform hover:scale-105"
        style={{ background: "var(--color-whatsapp)" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${site.phonePrimary}`}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
