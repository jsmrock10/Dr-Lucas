import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Dr. Lucas Bespoke | Luxury Custom Suits | Wear Your Story',
  description: 'Premium bespoke suits crafted with personal narratives woven into every detail. Experience luxury tailoring that tells your unique story.',
  keywords: ['luxury suits', 'bespoke tailoring', 'custom suits', 'menswear', 'wedding suits', 'executive suits'],
  authors: [{ name: 'Dr. Lucas Bespoke' }],
  creator: 'Dr. Lucas Bespoke',
  publisher: 'Dr. Lucas Bespoke',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://drlucasbespoke.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Lucas Bespoke | Luxury Custom Suits',
    description: 'Premium bespoke suits crafted with personal narratives woven into every detail.',
    url: 'https://drlucasbespoke.com',
    siteName: 'Dr. Lucas Bespoke',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Lucas Bespoke - Luxury Custom Suits',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Lucas Bespoke | Luxury Custom Suits',
    description: 'Premium bespoke suits crafted with personal narratives woven into every detail.',
    images: ['/og-image.jpg'],
    creator: '@drlucasbespoke',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-luxury-pearl text-luxury-charcoal antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#f9fafb',
              border: '1px solid #f59e0b',
            },
          }}
        />
      </body>
    </html>
  )
}