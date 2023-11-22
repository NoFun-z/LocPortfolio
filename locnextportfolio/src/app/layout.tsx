import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LocNextPortfolio',
  description: 'Built by Loc Pham @ 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header>
        <main className={`${inter.className} min-h-screen pt-[144.78px] px-8 pb-16 sm:px-14 md:px-28 lg:px-40 xl:px-64`}>{children}</main>
      </Header>
    </html>
  )
}
