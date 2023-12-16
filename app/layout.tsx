"use client"

import "@/styles/globals.css"
import { Metadata } from "next"
import { RecoilRoot } from "recoil"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <RecoilRoot>
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="">{children}</div>
              </div>
              <TailwindIndicator />
            </RecoilRoot>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
