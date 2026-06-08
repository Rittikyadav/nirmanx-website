import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NIRMAN X",
    template: "%s | NIRMAN X",
  },

  description:
    "NIRMAN X is a Deep-Tech Engineering company focused on Artificial Intelligence, Embedded Systems, Industrial IoT, Cloud Platforms, Electronics Engineering and Semiconductor Technologies.",

  keywords: [
    "Artificial Intelligence",
    "Embedded Systems",
    "Industrial IoT",
    "Cloud Platforms",
    "Electronics Engineering",
    "Semiconductor",
    "VLSI",
    "Industry 4.0",
    "Computer Vision",
    "Smart Energy",
    "Air Quality Monitoring",
    "Digital Twin",
    "NIRMAN X",
    "Make In India",
  ],

  authors: [
    {
      name: "NIRMAN X",
    },
  ],

  creator: "NIRMAN X",

  publisher: "NIRMAN X",

  metadataBase: new URL("https://nirmanx.com"),

  openGraph: {
    title: "NIRMAN X",
    description:
      "Engineering India's Future. Building the World.",

    url: "https://nirmanx.com",

    siteName: "NIRMAN X",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NIRMAN X",

    description:
      "Deep-Tech Engineering | AI | Embedded Systems | IoT | Electronics | Semiconductor Technologies",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

    </html>
  );
}