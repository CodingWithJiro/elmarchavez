import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], display: "swap" });
const metaDescription =
  "Full stack software engineer specializing in React and TypeScript. Building modern web applications, mobile apps, and contributing to tech communities.";
const siteUrl = "https://elmarchavez.vercel.app/";

export const metadata: Metadata = {
  title: "Elmar Chavez | Full Stack Developer",
  description: metaDescription,
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "Software Engineer",
    "TypeScript",
    "JavaScript",
    "React",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Elmar Chavez" }],
  creator: "Elmar Chavez",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    siteName: "Elmar Chavez",
    locale: "en_US",
    title: "Elmar Chavez - Full Stack Developer",
    type: "website",
    description: metaDescription,
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}img/site-preview-meta_1200x630.png`,
        width: 1200,
        height: 630,
        alt: "Elmar Chavez - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmar Chavez - Full Stack Developer",
    description: metaDescription,
    images: [`${siteUrl}img/site-preview-meta_1200x630.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
