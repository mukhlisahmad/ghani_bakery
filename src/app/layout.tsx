import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghani Bakery | Fresh & Handmade",
  description:
    "Roti, kue, dan pastry segar setiap hari. Pesan langsung via WhatsApp.",
  applicationName: "Ghani Bakery",
  keywords: [
    "bakery",
    "roti",
    "kue",
    "pastry",
    "donat",
    "croissant",
    "cake",
    "halal",
    "Gresik",
    "Bungah",
    "toko roti",
  ],
  authors: [{ name: "Ghani Bakery", url: "/" }],
  creator: "Ghani Bakery",
  publisher: "Ghani Bakery",
  metadataBase: undefined,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Ghani Bakery | Fresh & Handmade",
    description:
      "Roti, kue, dan pastry segar setiap hari. Pesan langsung via WhatsApp.",
    url: "/",
    siteName: "Ghani Bakery",
    images: [
      { url: "/logo-ghani.png", width: 512, height: 512, alt: "Logo Ghani Bakery" },
      { url: "/logo-ghani.svg", width: 512, height: 512, alt: "Logo Ghani Bakery SVG" },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghani Bakery | Fresh & Handmade",
    description:
      "Roti, kue, dan pastry segar setiap hari. Pesan langsung via WhatsApp.",
    images: ["/logo-ghani.png", "/logo-ghani.svg"],
    creator: "@",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "Ghani Bakery",
              url: "/",
              email: "ghani.bakery@gmail.com",
              image: [
                "/logo-ghani.svg",
                "/bakery/hero-basket.svg",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Jl. Margo Mulyo, Karangjarak, Kisik, Kec. Bungah",
                addressLocality: "Kabupaten Gresik",
                addressRegion: "Jawa Timur",
                postalCode: "61152",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -7.034470892967442,
                longitude: 112.57501507505638,
              },
              servesCuisine: "Bakery",
              priceRange: "IDR",
            }),
          }}
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
