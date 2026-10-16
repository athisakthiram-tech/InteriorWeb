import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { images, site, services, mapsLink } from "@/data/site";
import { getSiteUrl } from "@/lib/url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-wght-normal.woff2", style: "normal", weight: "300 700" },
    { path: "../fonts/cormorant-garamond-latin-wght-italic.woff2", style: "italic", weight: "300 700" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const manrope = localFont({
  src: "../fonts/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-manrope",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const siteUrl = getSiteUrl();
const title = `${site.name} | Interior Designers & Furniture Works in ${site.city}`;
const ogImage = images.hero.replace("w=2000", "w=1200&h=630");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    `interior designers in ${site.city}`,
    "modular kitchen",
    "wardrobes",
    "office interiors",
    "custom furniture",
    "main gate fabrication",
    "MS SS railings",
    "false ceiling",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${site.name} interior work` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#262320",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${siteUrl}/#business`,
  name: site.name,
  description: site.description,
  url: siteUrl,
  image: images.hero,
  telephone: site.phoneDisplay,
  ...(site.email ? { email: site.email } : {}),
  founder: { "@type": "Person", name: site.owner },
  foundingDate: String(site.foundedYear),
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    addressRegion: "Tamil Nadu",
    postalCode: "626117",
    addressCountry: "IN",
  },
  areaServed: site.serviceArea,
  hasMap: mapsLink,
  openingHours: "Mo-Sa 09:30-19:00",
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.summary },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-svh">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-plaster"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
