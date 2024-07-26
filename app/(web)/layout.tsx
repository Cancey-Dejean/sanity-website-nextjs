import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google";
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"
import PageWrapper from "@/components/PageWrapper"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
    <body>
    {draftMode().isEnabled && (
      <div>
        <a className="p-4 bg-blue-300 block" href="/api/disable-draft">
          Disable preview mode
        </a>
      </div>
    )}
    <PageWrapper>{children}</PageWrapper>

    {draftMode().isEnabled && <VisualEditing/>}
    </body>
    </html>
  )
}
