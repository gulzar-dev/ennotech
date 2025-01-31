import type { Metadata } from 'next'
import './globals.css'
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: 'Ennotech Solutions',
  description: 'Created ',
}

const inter = Inter({ subsets: ["latin"] })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`w-full ${inter.className}`}>{children}</body>
    </html>
  )
}
