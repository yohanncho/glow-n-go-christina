import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://glowngobeautybychristina.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.businessName} | Natural-Looking Botox in Los Alamitos, CA`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "Natural-looking botox at $10/unit by Christina, a licensed aesthetic nurse injector in Los Alamitos, CA. Forehead lines, crow's feet, lip flips, jaw slimming and more. Book a free consultation.",
  keywords: [
    "botox",
    "botox Los Alamitos",
    "nurse injector",
    "lip flip",
    "crow's feet",
    "forehead botox",
    "med spa Orange County",
    "Glow N Go Beauty",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.businessName,
    title: `${site.businessName} | Natural-Looking Botox in Los Alamitos, CA`,
    description:
      "Natural-looking botox at $10/unit by Christina, a licensed aesthetic nurse injector in Los Alamitos, CA. Book a free consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} | Natural-Looking Botox in Los Alamitos, CA`,
    description:
      "Natural-looking botox at $10/unit by Christina, a licensed aesthetic nurse injector in Los Alamitos, CA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-body text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
