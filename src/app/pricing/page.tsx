import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarCheck,
  ClipboardList,
  Syringe,
} from "lucide-react";
import { site } from "@/config/site";
import { treatments, priceRange } from "@/data/treatments";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Simple botox pricing at ${site.businessName}: $${site.pricePerUnit} per unit for every treatment in Los Alamitos, CA. See example totals and how units work.`,
};

const steps = [
  {
    icon: CalendarCheck,
    title: "1. Free consultation",
    text: "We talk through your goals, assess your facial movement, and map a treatment plan together.",
  },
  {
    icon: ClipboardList,
    title: "2. Confirm your units",
    text: "Christina recommends an exact unit count for each area. You approve the total before anything is injected.",
  },
  {
    icon: Syringe,
    title: "3. Quick treatment",
    text: "Most appointments take 15\u201330 minutes. You'll see full results in about two weeks.",
  },
  {
    icon: BadgeDollarSign,
    title: "4. Simple checkout",
    text: `Pay $${site.pricePerUnit} per unit used \u2014 the exact total you already approved. No surprises.`,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Pricing"
          title={`$${site.pricePerUnit} per unit. That's it.`}
          description="One flat rate for every botox treatment \u2014 no tiers, no packages you don't need, no hidden fees. Here's exactly how it works."
        />

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-linen bg-white/60 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Example totals */}
        <div className="mt-16">
          <SectionHeading
            eyebrow="Examples"
            title="What might my visit cost?"
            description={`Example totals at $${site.pricePerUnit}/unit, based on typical unit ranges. Your plan is personalized at consultation.`}
          />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-linen">
            <table className="w-full bg-white/60 text-left text-sm">
              <thead>
                <tr className="bg-sand text-xs uppercase tracking-widest text-espresso">
                  <th className="px-6 py-4 font-semibold">Treatment</th>
                  <th className="px-6 py-4 font-semibold">Typical units</th>
                  <th className="px-6 py-4 text-right font-semibold">
                    Estimated total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-linen">
                {treatments.map((t) => (
                  <tr key={t.name} className="transition-colors hover:bg-sand/60">
                    <td className="px-6 py-4 font-medium text-charcoal">
                      {t.name}
                    </td>
                    <td className="px-6 py-4 text-espresso">{t.typicalUnits}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gold-deep">
                      {priceRange(t)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deposit + consultation info */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-sand p-7">
            <h3 className="font-display text-xl font-semibold text-charcoal">
              New-client consultations
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-espresso">
              Your first visit starts with a complimentary consultation:
              goals, medical history, and a personalized treatment map. If
              you&apos;re happy with the plan, treatment can often happen the
              same day.
            </p>
          </div>
          <div className="rounded-2xl bg-sand p-7">
            <h3 className="font-display text-xl font-semibold text-charcoal">
              Booking deposit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-espresso">
              {site.depositPolicy}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-deep"
          >
            Book your consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
