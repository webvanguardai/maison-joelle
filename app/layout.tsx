import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0808',
}

export const metadata: Metadata = {
  title: 'Maison Joëlle — Bespoke Fine Jewelry Atelier Dubai',
  description: "Dubai's premier bespoke jewelry atelier. Custom-crafted rings, necklaces and bracelets. Book your private consultation in DIFC.",
  keywords: 'bespoke jewelry dubai, custom jewelry dubai, fine jewellery atelier dubai, engagement rings dubai',
  authors: [{ name: 'Maison Joëlle' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://maison-joelle.vercel.app',
    siteName: 'Maison Joëlle',
    title: 'Maison Joëlle — Bespoke Fine Jewelry Atelier Dubai',
    description: "Dubai's premier bespoke jewelry atelier. Custom-crafted rings, necklaces and bracelets. Book your private consultation in DIFC.",
    images: [
      {
        url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Maison Joëlle — Bespoke Fine Jewelry Atelier Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maison Joëlle — Bespoke Fine Jewelry Atelier Dubai',
    description: "Dubai's premier bespoke jewelry atelier. Custom-crafted rings, necklaces and bracelets.",
    images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'JewelryStore',
  name: 'Maison Joëlle',
  description: "Dubai's premier bespoke jewelry atelier in DIFC. Custom-crafted fine jewelry including rings, necklaces and bracelets.",
  url: 'https://maison-joelle.vercel.app',
  telephone: '+971585324519',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai International Financial Centre',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2104,
    longitude: 55.2797,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '20:00',
  },
  priceRange: '$$$$',
  hasMap: 'https://maps.google.com/?q=DIFC+Dubai',
  image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
  sameAs: [
    'https://instagram.com/maisonjoelle',
    'https://wa.me/971585324519',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PLACEHOLDER');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
