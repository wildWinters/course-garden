import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HeaderWrapper } from "@/shared/widgets/header/header-wrapper";
import { HeaderLogo } from "@/shared/widgets/header/components/logo";
import { HeaderLinks } from "@/shared/widgets/header/components/links";
import HEADER_LINKS from "@/shared/constants/header-links";
import { Cabin } from "next/font/google";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Garden",
  description: "mini-courses AI creator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${cabin.variable}`}
      >
        <HeaderWrapper>
          <HeaderLogo />
          <HeaderLinks links={HEADER_LINKS} />
        </HeaderWrapper>
        {children}
      </body>
    </html>
  );
}
