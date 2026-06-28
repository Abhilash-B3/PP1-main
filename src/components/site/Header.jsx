import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import logoAsset from "@/assets/crystal-logo.jpeg";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={logoAsset}
            alt="Crystal House Maid Service"
            width={44}
            height={44}
            loading="eager"
            decoding="async"
            className="h-11 w-11 shrink-0 rounded-lg object-contain bg-white p-0.5 ring-1 ring-border"
          />

          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap font-display text-base font-semibold text-foreground">
              Crystal House
            </span>
            <span className="whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-gold">
              Maid Service
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-2.5 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "text-primary bg-primary-soft" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phonePrimary}`}
            className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary 2xl:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phones[0]}
          </a>
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Book Now</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-page flex flex-col py-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft hover:text-primary"
                activeProps={{ className: "text-primary bg-primary-soft" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <Button asChild className="flex-1">
                <a href={`tel:${site.phonePrimary}`}>Call Now</a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
