import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Swiim Nano - Tickets Numériques & Fidélité',
  description: 'Recevez votre ticket numérique et vos points fidélité instantanément',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

