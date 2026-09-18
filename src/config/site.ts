/**
 * Central site configuration.
 *
 * Every page and component on this site reads from this file.
 * Do NOT hardcode business details (name, phone, address, links)
 * anywhere else — change them here and they update site-wide.
 */

export const site = {
  /** Business name shown in the header, footer, and page titles. */
  businessName: "Glow N Go Beauty by Christina",

  /** Short brand mark used in the logo and favicon. */
  brandMark: "G",

  /** One-line tagline used under the hero headline. */
  tagline: "Natural-looking botox by a licensed aesthetic nurse injector.",

  /** Display phone number (click-to-call everywhere). */
  phone: "(562) 304-0220",
  /** Phone number in tel: link format. */
  phoneHref: "tel:+15623040220",

  /** Full street address. */
  address: "4747 Katella Ave Suite 100 Room 19, Los Alamitos, CA 90720",

  /** Hours shown in the footer and contact page. */
  hours: "Mon–Sun 9am–6pm",

  /** Instagram profile. */
  instagramUrl: "https://www.instagram.com/glowngobeautybychristina",
  instagramHandle: "@glowngobeautybychristina",

  /**
   * PLACEHOLDER — replace with Christina's real Calendly event link
   * once her Calendly account is set up. Every "Book" button and the
   * booking page embed read from this value.
   */
  calendlyUrl: "https://calendly.com/glowngobeautybychristina/consultation",

  /**
   * PLACEHOLDER — contact form submissions are front-end only for now.
   * When a form backend (Formspree, Resend, etc.) is chosen, put the
   * destination address here and wire it up in the contact page.
   */
  contactEmail: "hello@example.com",

  /** Flat price per unit of botox, in dollars. */
  pricePerUnit: 10,

  /**
   * PLACEHOLDER — deposit policy. Confirm with Christina before launch.
   * (The partner practice currently asks a $75 deposit for new clients.)
   */
  depositPolicy:
    "A deposit may be required to reserve new-client appointments. Details confirmed at booking.",

  /** Google Maps embed URL (no API key needed). */
  mapEmbedUrl:
    "https://www.google.com/maps?q=4747+Katella+Ave+Suite+100+Room+19,+Los+Alamitos,+CA+90720&output=embed",

  /** Standard medical disclaimers shown in the footer of every page. */
  disclaimers: [
    "Individual results vary.",
    "A consultation is required before treatment.",
    "All injections are administered by a licensed medical professional.",
  ],
} as const;

export type SiteConfig = typeof site;
