import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/components/reactbits/ProfileCard.css'
import { personalTrainerConfig } from '@/config/personal-trainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${personalTrainerConfig.fullName} - Personal Trainer`,
  description:
    'Personal Trainer especialista em transformação corporal. Consultoria online e presencial. Resultados de verdade para sua saúde e autoestima!',
  keywords: [
    'personal trainer',
    'transformação corporal',
    'queimar gordura',
    'ganhar músculo',
    'consultoria online',
    'treino presencial',
    personalTrainerConfig.fullName.toLowerCase(),
    'personal trainer online',
    'transformação de verdade',
  ],
  authors: [{ name: personalTrainerConfig.fullName }],
  creator: personalTrainerConfig.fullName,
  publisher: `${personalTrainerConfig.fullName} Personal Trainer`,
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
    url: personalTrainerConfig.website,
    title: `${personalTrainerConfig.fullName} - Personal Trainer`,
    description:
      'Transformação corporal real com metodologia científica. Resultados de verdade para sua saúde e autoestima!',
    siteName: `${personalTrainerConfig.fullName} Personal Trainer`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalTrainerConfig.fullName} - Personal Trainer`,
    description:
      'Transformação corporal real com metodologia científica. Resultados de verdade para sua saúde e autoestima!',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: personalTrainerConfig.website,
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
        <meta name="theme-color" content="#DC2626" />
        <meta name="msapplication-TileColor" content="#DC2626" />
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
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: personalTrainerConfig.fullName,
              jobTitle: personalTrainerConfig.title,
              description:
                'Personal Trainer especialista em transformações corporais',
              url: personalTrainerConfig.website,
              address: {
                '@type': 'PostalAddress',
                addressLocality:
                  personalTrainerConfig.location.split(' - ')[0] || '',
                addressRegion:
                  personalTrainerConfig.location.split(' - ')[1] || '',
                addressCountry: 'BR',
              },
              telephone: personalTrainerConfig.phone,
              offers: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Consultoria Personal Trainer',
                  description:
                    'Consultoria online e presencial para transformação corporal',
                },
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
} 