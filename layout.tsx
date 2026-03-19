import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OZ Detailing | Mobile Car Valeting & Pressure Washing — London',
  description: 'Premium mobile car detailing and valeting service in London. We come to you — hand wash, interior deep clean, and outdoor pressure washing for driveways & patios.',
  keywords: 'mobile car detailing london, car valeting london, mobile car wash, pressure washing london, driveway cleaning london',
  openGraph: {
    title: 'OZ Detailing | Mobile Car Valeting London',
    description: 'Premium mobile car detailing and pressure washing in London. We come to you.',
    url: 'https://ozdetailing.co.uk',
    siteName: 'OZ Detailing',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
