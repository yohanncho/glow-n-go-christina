import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { site } from "@/config/site";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.businessName} in Los Alamitos, CA \u2014 address, hours, phone, and Instagram.`,
};

const infoCards = [
  {
    icon: MapPin,
    title: "Address",
    body: site.address,
  },
  {
    icon: Clock,
    title: "Hours",
    body: site.hours,
  },
  {
    icon: Phone,
    title: "Call or text",
    body: site.phone,
    href: site.phoneHref,
  },
  {
    icon: InstagramIcon,
    title: "Instagram",
    body: site.instagramHandle,
    href: site.instagramUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Questions about treatments, pricing, or booking? Reach out \u2014 we usually reply within one business day."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-linen bg-white/60 p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-soft text-gold-deep">
                <card.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso">
                {card.href ? (
                  <a
                    href={card.href}
                    {...(card.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="font-medium text-gold-deep hover:text-charcoal"
                  >
                    {card.body}
                  </a>
                ) : (
                  card.body
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-linen">
            <iframe
              src={site.mapEmbedUrl}
              title={`Map to ${site.businessName}`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact form (front-end only) */}
          <div className="rounded-2xl border border-linen bg-white/60 p-7">
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-espresso">
              Front-end demo only \u2014 the form backend is coming soon. For
              now, please call, text, or DM on Instagram.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
