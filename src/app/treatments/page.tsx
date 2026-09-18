import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Info } from "lucide-react";
import { site } from "@/config/site";
import { treatments, priceRange } from "@/data/treatments";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Botox Treatments",
  description: `Every botox treatment offered by ${site.businessName} in Los Alamitos, CA — forehead lines, crow's feet, lip flip, jaw slimming and more, all at $${site.pricePerUnit}/unit.`,
};

export default function TreatmentsPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Menu"
          title="Botox treatments"
          description={`Every treatment below is priced at a flat $${site.pricePerUnit} per unit. Unit counts shown are typical ranges — your exact plan is confirmed with Christina at your consultation, before anything is injected.`}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {treatments.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-linen bg-white/60 p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                  <TreatmentIcon name={t.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-charcoal">
                    {t.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-gold-deep">
                    {priceRange(t)}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-espresso">
                {t.description}
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-linen pt-5 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-taupe">
                    Typical units
                  </dt>
                  <dd className="mt-1 font-medium text-charcoal">
                    {t.typicalUnits}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-widest text-taupe">
                    Treatment time
                  </dt>
                  <dd className="mt-1 flex items-center gap-1.5 font-medium text-charcoal">
                    <Clock className="h-3.5 w-3.5 text-gold-deep" aria-hidden="true" />
                    {t.duration}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl items-start gap-3 rounded-2xl bg-sand p-6">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-espresso">
            <span className="font-semibold text-charcoal">
              A note on unit counts:{" "}
            </span>
            everyone&apos;s facial anatomy is different. The ranges above are
            typical — Christina will assess your muscle movement at your
            consultation and confirm your exact units and total price before
            treatment begins.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-deep"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
