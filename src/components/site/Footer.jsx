import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { site, services } from "@/lib/site-data";
import logoAsset from "@/assets/crystal-logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logoAsset}
              alt="Crystal House Maid Service"
              className="h-11 w-11 rounded-lg object-contain bg-white p-0.5 ring-1 ring-border"
            />

            <span className="font-display text-lg font-semibold">Crystal House</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            {site.tagline} Bengaluru's trusted domestic staffing company since 2021.
          </p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/why-choose-us" className="hover:text-primary">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="hover:text-primary">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="hover:text-primary">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-primary">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <a href={`tel:${site.phonePrimary}`} className="block hover:text-primary">
                  {site.phones[0]}
                </a>
                <a href="tel:+919353131149" className="block hover:text-primary">
                  {site.phones[1]}
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Crystal House Maid Service. All rights reserved.</p>
          <p>
            Trusted. Trained. <span className="text-gold">Top Quality.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
