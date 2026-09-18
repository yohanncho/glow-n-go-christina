import type { Metadata } from "next";
import { CalendarCheck, ExternalLink, Phone } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: `Book a free botox consultation with Christina at ${site.businessName} in Los Alamitos, CA.`,
};

export default function BookingPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Booking"
          title="Book your consultation"
          description="Choose a time that works for you. Your consultation is free, and your treatment plan — with exact units and pricing — is confirmed before anything is injected."
        />

        <div className="mt-10 rounded-2xl border border-linen bg-sand p-6 text-center">
          <p className="text-sm font-medium text-espresso">
            Online booking opens at launch in late October. Prefer to reach
            out directly?{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-gold-deep hover:text-charcoal"
            >
              Call or text {site.phone}
            </a>
            .
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href={site.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-base font-semibold text-cream transition-colors hover:bg-gold-deep"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Open the booking calendar
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs text-taupe">
            Opens in a new tab · Powered by Calendly
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-linen bg-white">
          <iframe
            src={site.calendlyUrl}
            title="Book a consultation with Christina"
            className="h-[700px] w-full"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-espresso">
          <Phone className="h-4 w-4 text-gold-deep" aria-hidden="true" />
          <span>
            Questions first? Call or text{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-gold-deep hover:text-charcoal"
            >
              {site.phone}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
