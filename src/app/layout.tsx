import { NextUIClientProvider } from "@/components/providers/nextui-provider"

import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import QueryProvider from "@/components/providers/query-client"
import SessionProvider from "@/components/providers/session-provider"
import { Toaster } from "@/components/providers/toast-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Postify",
  icons: "/logo.svg",
  description:
    "Generated by create next appShare your fleeting moments with the world through Postify! Discover new users, trending posts, and exciting content tailored to your interests..",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <QueryProvider>
            <NextUIClientProvider>
              <Toaster />
              {children}
            </NextUIClientProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
