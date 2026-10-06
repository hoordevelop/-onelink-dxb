import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { getBrandImages } from "@/lib/assets";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "OneLink Delivery | The gold standard, door to door";
const description =
  "ONELINK DELIVERY L.L.C-FZ. Bikes and cars from Meydan, Dubai, booked and tracked to the door.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  keywords: [
    "Dubai delivery service",
    "bike delivery Dubai",
    "car delivery Dubai",
    "business delivery Dubai",
    "same day delivery Dubai",
    "courier service Dubai",
  ],
  applicationName: site.name,
  openGraph: {
    title,
    description,
    url: site.url,
    locale: "en_AE",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  description,
  telephone: site.phoneTel,
  email: site.email,
  areaServed: "Dubai",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.join(", "),
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  openingHours: "Mo-Sa 09:00-18:00",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="site-scrollbar min-h-full bg-white text-[#16181D]">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader logoSrc={getBrandImages().logo} />
        {children}
        <SiteFooter logoSrc={getBrandImages().logo} />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
