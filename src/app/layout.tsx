import type { Metadata } from "next";
import "./globals.css";
import { interTight, instrumentSerif, jetbrainsMono } from "./fonts";
import { SmoothScroll } from "@/components/smooth-scroll";
import { RevealProvider } from "@/components/reveal-provider";
import { SiteNav } from "@/components/site-nav";
import { OG_IMAGE } from "@/lib/assets";
import { siteBaseUrl } from "@/lib/base-path";
import { PROFILE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.summary,
  openGraph: {
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.summary,
    url: siteBaseUrl,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <SmoothScroll />
        <RevealProvider />
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
