"use client";

import { useState } from "react";
import { Send } from "lucide-react";

/**
 * Front-end-only contact form.
 * There is no backend wired up yet — submitting shows a notice
 * instead of sending. When a form backend (Formspree, Resend, etc.)
 * is chosen, wire it up here and set the destination in
 * src/config/site.ts (contactEmail).
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="mt-6 rounded-xl bg-sand p-6 text-center">
        <p className="font-display text-lg font-semibold text-charcoal">
          Thanks for reaching out
        </p>
        <p className="mt-2 text-sm leading-relaxed text-espresso">
          This demo form doesn&apos;t send anywhere yet — the message
          backend is coming soon. Please call, text, or DM on Instagram and
          we&apos;ll get right back to you.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-linen bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-taupe focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label
          htmlFor="contact-name"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={inputCls}
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputCls}
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-charcoal"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What are you curious about?"
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-gold-deep"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </button>
    </form>
  );
}
