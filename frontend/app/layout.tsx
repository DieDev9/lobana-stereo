import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lobana Stereo 96.8 FM - Marcando la diferencia | Radio en Vivo',
  description: 'Lobana Stereo 96.8 FM - Tu emisora de radio favorita. Escucha en vivo la mejor programacion musical, noticias regionales, entretenimiento y mas. Marcando la diferencia en la radio colombiana.',
  keywords: ['radio', 'lobana stereo', '96.8 FM', 'radio en vivo', 'emisora', 'musica', 'noticias', 'programacion radial', 'radio colombiana'],
  authors: [{ name: 'Lobana Stereo' }],
  creator: 'Lobana Stereo',
  publisher: 'Lobana Stereo 96.8 FM',
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://lobanastereo.com',
    siteName: 'Lobana Stereo 96.8 FM',
    title: 'Lobana Stereo 96.8 FM - Marcando la diferencia',
    description: 'Escucha en vivo la mejor programacion musical, noticias regionales y entretenimiento. Tu emisora favorita.',
    images: [
      {
        url: '/images/logo-lobana-stereo.png',
        width: 800,
        height: 600,
        alt: 'Lobana Stereo 96.8 FM Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lobana Stereo 96.8 FM - Marcando la diferencia',
    description: 'Escucha en vivo la mejor programacion musical, noticias y entretenimiento.',
    images: ['/images/logo-lobana-stereo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/images/logo-lobana-stereo.png',
    apple: '/images/logo-lobana-stereo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
