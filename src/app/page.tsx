import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import { site } from "@/config/site";
import { treatments, priceRange } from "@/data/treatments";
import { TreatmentIcon } from "@/components/TreatmentIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

const featured = treatments.slice(0, 6);

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Licensed medical professional",
    text: "Every injection is administered by Christina, a licensed aesthetic nurse injector.",
  },
  {
    icon: CalendarCheck,
    title: "Free consultation",
    text: "We map your treatment plan together before anything is injected. No pressure, no surprises.",
  },
  {
    icon: Sparkles,
    title: `$${site.pricePerUnit}/unit, simple pricing`,
    text: "One flat rate for every treatment. You'll always know your total before we begin.",
  },
];

const testimonials = [
  {
    quote:
      "Placeholder testimonial \u2014 Christina will add a real client review here after launch.",
    name: "Client name",
    treatment: "Forehead Lines",
  },
  {
    quote:
      "Placeholder testimonial \u2014 Christina will add a real client review here after launch.",
    name: "Client name",
    treatment: "Crow's Feet",
  },
  {
    quote:
      "Placeholder testimonial \u2014 Christina will add a real client review here after launch.",
    name: "Client name",
    treatment: "Lip Flip",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Botox in Los Alamitos, CA
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl lg:text-6xl">
              Botox that looks like you \u2014 just refreshed
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-espresso">
              {site.tagline} Subtle, natural enhancements at a simple flat
              rate of ${site.pricePerUnit} per unit \u2014 so you can smooth,
              lift, and glow with total confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-deep"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book a consultation
              </a>
              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 bg-cream px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:border-gold-deep hover:text-gold-deep"
              >
                View treatments
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <PhotoPlaceholder
            label="Hero photo of Christina coming soon"
            className="aspect-[4/3] lg:aspect-[4/5]"
          />
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-linen bg-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-espresso">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured treatments */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Treatments"
            title="What botox can do for you"
            description="From softening lines to slimming the jawline, every treatment is personalized at your consultation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((t) => (
              <Link
                key={t.name}
                href="/treatments"
                className="group rounded-2xl border border-linen bg-white/60 p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-gold-deep transition-colors group-hover:bg-gold group-hover:text-cream">
                  <TreatmentIcon name={t.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso">
                  {t.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-gold-deep">
                  {priceRange(t)}{" "}
                  <span className="font-normal text-taupe">
                    \u00b7 {t.typicalUnits}
                  </span>
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-charcoal"
            >
              See all 10 treatments
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing highlight */}
      <section className="bg-charcoal">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Simple pricing
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-cream sm:text-4xl">
            ${site.pricePerUnit} per unit. Every treatment. No surprises.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cream/75">
            No tiered menus, no hidden fees. Your exact unit count and total
            are confirmed with you at your consultation \u2014 before anything
            is injected.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold-soft"
          >
            How pricing works
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
          <PhotoPlaceholder label="Photo of Christina coming soon" />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Your injector"
              title="Meet Christina"
              description="A licensed aesthetic nurse injector with an eye for natural, balanced results. Christina believes the best botox is the kind nobody can spot \u2014 friends just notice you look rested."
            />
            <p className="mt-4 text-base leading-relaxed text-espresso">
              Working alongside the team at Glow N Go Beauty in Los Alamitos,
              Christina specializes in conservative, artful dosing tailored to
              your facial anatomy and goals.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-charcoal"
            >
              More about Christina
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-linen bg-sand">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="Kind words"
            title="What clients say"
            description="Real reviews will appear here after launch. Here's where they'll live."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-dashed border-taupe/40 bg-cream p-6"
              >
                <div
                  className="flex gap-1 text-gold"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm italic leading-relaxed text-espresso">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold text-charcoal">{t.name}</span>
                  <span className="text-taupe"> \u00b7 {t.treatment}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Location / hours */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading eyebrow="Find us" title="Visit the studio" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-linen bg-white/60 p-6 text-center">
              <MapPin
                className="mx-auto h-6 w-6 text-gold-deep"
                aria-hidden="true"
              />
              <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                Address
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso">
                {site.address}
              </p>
            </div>
            <div className="rounded-2xl border border-linen bg-white/60 p-6 text-center">
              <Clock
                className="mx-auto h-6 w-6 text-gold-deep"
                aria-hidden="true"
              />
              <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                Hours
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso">
                {site.hours}
              </p>
            </div>
            <div className="rounded-2xl border border-linen bg-white/60 p-6 text-center">
              <Phone
                className="mx-auto h-6 w-6 text-gold-deep"
                aria-hidden="true"
              />
              <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                Call or text
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso">
                <a
                  href={site.phoneHref}
                  className="font-semibold text-gold-deep hover:text-charcoal"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-deep"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book a consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
