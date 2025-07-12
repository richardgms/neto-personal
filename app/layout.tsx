import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/components/reactbits/ProfileCard.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joelma Costa - Personal Trainer',
  description: 'Personal Trainer especializada em transformação corporal real. Consultoria online e presencial na Paraíba. Resultados de verdade para sua saúde e autoestima!',
  keywords: [
    'personal trainer',
    'paraíba',
    'transformação corporal',
    'queimar gordura',
    'ganhar músculo',
    'consultoria online',
    'treino presencial',
    'joelma costa',
    'personal trainer pb',
    'transformação de verdade'
  ],
  authors: [{ name: 'Joelma Costa' }],
  creator: 'Joelma Costa',
  publisher: 'Joelma Costa Personal Trainer',
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://joelmacosta.com.br',
    title: 'Joelma Costa - Personal Trainer',
    description: 'Transformação corporal real com metodologia científica. Resultados de verdade para sua saúde e autoestima!',
    siteName: 'Joelma Costa Personal Trainer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joelma Costa - Personal Trainer',
    description: 'Transformação corporal real com metodologia científica. Resultados de verdade para sua saúde e autoestima!',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://joelmacosta.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth scrollbar-fire">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/logo/monogram.png" type="image/png" />
        <meta name="theme-color" content="#0ec9d6" />
        <meta name="msapplication-TileColor" content="#0ec9d6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* WhatsApp Meta Tags */}
        <meta property="og:image" content="/whatsapp-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joelma Costa",
              "jobTitle": "Personal Trainer",
              "description": "Personal Trainer especializada em transformações corporais extremas",
              "url": "https://joelmacosta.com.br",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santa Rita",
                "addressRegion": "PB",
                "addressCountry": "BR"
              },
              "telephone": "+5583988073784",
              "offers": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consultoria Personal Trainer",
                  "description": "Consultoria online e presencial para transformação corporal"
                }
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 