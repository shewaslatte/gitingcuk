import type { Metadata } from "next"

import { LayoutProps } from "@/types/common"
import { inter } from "@/lib/fonts"
import TopBar from "@/components/commons/top-bar"
import ThemeProvider from "@/components/providers/theme-provider"

import "./globals.css"

import Modals from "@/components/commons/modals"

export const metadata: Metadata = {
  title: "Giting Cuk",
  description: "Collaborative git client for everyone",
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TopBar />
          <main className="antialiased">{children}</main>
          <Modals />
        </ThemeProvider>
      </body>
    </html>
  )
}
