import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Jack Petrie - Film Student Portfolio',
  description: 'Showcasing the creative works and film projects of Jack Petrie, an aspiring filmmaker and film student.',
  keywords: ['film', 'portfolio', 'student', 'filmmaker', 'cinema', 'Jack Petrie'],
  authors: [{ name: 'Jack Petrie' }],
  openGraph: {
    title: 'Jack Petrie - Film Student Portfolio',
    description: 'Showcasing the creative works and film projects of Jack Petrie',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
} 