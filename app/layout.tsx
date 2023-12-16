"use client"

import "@/styles/globals.css"
import { useReportWebVitals } from "next/web-vitals"
import { RecoilRoot } from "recoil"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  useReportWebVitals((metric) => {
    if (
      metric.name === "FCP" ||
      metric.name === "LCP" ||
      metric.name === "Next.js-render"
    ) {
      // Log the load time to the console
      console.log(`${metric.name}: ${metric.value}ms`)
    }
  })
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
