import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghani Bakery | Fresh & Handmade",
  description:
    "Roti, kue, dan pastry segar setiap hari. Pesan langsung via WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
