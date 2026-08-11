import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.buildoarchitect.com'),
  title: {
    default: "Buildo | We Design Your Dream",
    template: "%s | Buildo",
  },
  description: "Architectural Design, Construction, and Interior Design under one roof in Madurai, Tamil Nadu since 2018.",
  keywords: ["Construction Company Madurai", "Architects in Tamil Nadu", "Turnkey Construction", "Interior Design Madurai", "Buildo Architects", "House Construction"],
  openGraph: {
    title: "Buildo | We Design Your Dream",
    description: "Architectural Design, Construction, and Interior Design under one roof in Madurai, Tamil Nadu since 2018.",
    url: 'https://www.buildoarchitect.com',
    siteName: 'Buildo Architects',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Buildo | We Design Your Dream",
    description: "Architectural Design, Construction, and Interior Design under one roof.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-orange selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Buildo Architects",
              "url": "https://www.buildoarchitect.com",
              "telephone": "+919500417217",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3/799-2, Mahalakshmi Nagar, Moondrumavadi – Iyer Bungalow Road",
                "addressLocality": "Madurai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "625007",
                "addressCountry": "IN"
              }
            })
          }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
