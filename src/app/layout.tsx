import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import {dark} from "@clerk/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Max Tyson',
  description: 'Max Tyson\'s Portfolio',
}

const clerkAppearance = {
    baseTheme: dark,
    variables: {
        colorPrimary: "white",
        colorText: "white",
    },
    elements: {
        formButtonPrimary: {
            color: "black",
        },
    },
};


export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider appearance={clerkAppearance}>
        <html lang="en">
        <body>
        {/* Stick Login Button to the Top Right */}
        <div className="fixed top-0 right-0 z-50 m-8">
          <SignedOut>
              <div className="text-white">
                  <SignInButton />
              </div>
          </SignedOut>
          <SignedIn>
              <div className={"scale-150"}>
                <UserButton />
              </div>
          </SignedIn>
        </div>
        <main>
          {children}
        </main>
        </body>
        </html>
      </ClerkProvider>
  )
}