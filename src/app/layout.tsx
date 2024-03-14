import type { Metadata } from 'next'
import { Open_Sans as OpenSans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { BackToTop } from '@/components/sidebar-link'
import { Footer } from './components/footer'
import { Toaster } from '@/components/ui/sonner'
import { GoogleTagManager } from '@next/third-parties/google'
import { WhatsappButtton } from '@/components/contact-button'

const openSans = OpenSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rodrigo Freitas Psicanalista',
  description: 'Rodrigo Freitas Psicanalista',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={openSans.className}>
        <div className="overflow-x-hidden">
          <Header />
          <div className="fixed bottom-10 right-6 z-50 flex flex-col items-center gap-5 md:left-0 md:mx-auto md:items-end md:pr-4">
            <WhatsappButtton />

            <BackToTop />
          </div>
          {children}
          <Footer />
        </div>
        <Toaster richColors />
        <GoogleTagManager gtmId="GTM-TKK7MJQW" />
      </body>
    </html>
  )
}
