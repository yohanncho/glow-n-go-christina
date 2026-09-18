import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">
              {site.businessName}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {site.tagline}
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold-soft transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
              {site.instagramHandle}
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">
              Visit us
            </p>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>{site.hours}</span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2.5 transition-colors hover:text-gold-soft"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span>{site.phone}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-soft">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
              {[
                { href: "/treatments", label: "Treatments" },
                { href: "/pricing", label: "Pricing" },
                { href: "/booking", label: "Book a consultation" },
                { href: "/about", label: "About Christina" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6">
          <ul className="flex flex-col gap-1.5 text-xs leading-relaxed text-cream/60 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {site.disclaimers.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-cream/50">
            &copy; {new Date().getFullYear()} {site.businessName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
