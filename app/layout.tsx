import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Saw Htut Naing - Senior Web Developer | Full-Stack Engineer",
  description:
    "Senior Web Developer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web applications with modern technologies.",
  keywords: ["Senior Web Developer", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "JavaScript"],
  authors: [{ name: "Saw Htut Naing" }],
  creator: "Saw Htut Naing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "Saw Htut Naing - Senior Web Developer",
    description: "Senior Web Developer specializing in React, Next.js, TypeScript, and Node.js.",
    siteName: "Saw Htut Naing Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saw Htut Naing - Senior Web Developer",
    description: "Senior Web Developer specializing in React, Next.js, TypeScript, and Node.js.",
    creator: "@johndoe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saw Htut Naing",
              jobTitle: "Senior Web Developer",
              url: "https://johndoe.dev",
              sameAs: ["https://github.com/johndoe", "https://linkedin.com/in/johndoe", "https://twitter.com/johndoe"],
              knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Node.js"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
