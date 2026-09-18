import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, HeartHandshake } from "lucide-react";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "About Christina",
  description: `Meet Christina, the licensed aesthetic nurse injector behind ${site.businessName} in Los Alamitos, CA.`,
};

const credentials = [
  {
    icon: GraduationCap,
    title: "Licensed medical professional",
    text: "Trained and licensed to administer neurotoxin injections in California.",
  },
  {
    icon: Award,
    title: "Aesthetic specialization",
    text: "Focused training in facial anatomy and natural-looking botox techniques.",
  },
  {
    icon: HeartHandshake,
    title: "Conservative philosophy",
    text: "Artful, measured dosing — the best botox is the kind nobody can spot.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <PhotoPlaceholder label="Photo of Christina coming soon" />
          </div>
          <div className="lg:col-span-3">
            <SectionHeading
              align="left"
              eyebrow="Your injector"
              title="Hi, I'm Christina"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-espresso">
              <p>
                <span className="rounded bg-gold-soft px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-gold-deep">
                  Placeholder — Christina to personalize
                </span>
              </p>
              <p>
                I&apos;m Christina, a licensed aesthetic nurse injector based
                in Los Alamitos, California. I started {site.businessName}{" "}
                because I believe botox should enhance what makes you
                you — never change it. My approach is conservative and
                precise: we start with your goals, study your facial movement,
                and build a plan around the most natural version of your
                results.
              </p>
              <p>
                I work alongside the talented team at Glow N Go Beauty, where
                I&apos;ve trained extensively in advanced injection
                techniques. Whether it&apos;s your first time trying botox or
                you&apos;re a regular looking for a lighter touch, my goal is
                simple: you walk out feeling like the most refreshed version
                of yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="Credentials"
            title="Why you'll feel comfortable"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-linen bg-white/60 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                  <c.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-deep"
          >
            Book a consultation with Christina
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
