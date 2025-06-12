import { type Metadata } from 'next'
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import {  dark } from '@clerk/themes'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'HireFlow ',
  description: 'Ai Recruiter',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
    appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
  
      baseTheme: dark,
    }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <AppProvider> */}
              {children}
            {/* </AppProvider> */}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}