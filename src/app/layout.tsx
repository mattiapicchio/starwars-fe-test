import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import MainHeader from '@/components/MainHeader'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Star Wars Ships',
  description: 'Technical assessment using the Star Wars API',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-black-charcoal text-white">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  )
}
