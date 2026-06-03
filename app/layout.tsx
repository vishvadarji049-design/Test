import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Berk's Electrical & Lighting | Orange County's Top-Rated Electrician Since 1988",
  description:
    "Family-owned electrical contractor serving Orange County since 1988. Residential & commercial electrical, LED lighting, EV charging, panel upgrades, and solar PV.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
