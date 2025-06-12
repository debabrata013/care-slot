
import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: "CareSlot",
  description: "Book appointments with verified doctors.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html >
        <body className={`${geistSans.variable} ${geistMono.variable} `}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
  <SignedOut>
  <SignInButton forceRedirectUrl="/dashboard">
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
  </SignInButton>
  <SignUpButton forceRedirectUrl="/dashboard">
    <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
  </SignUpButton>
</SignedOut>

          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}