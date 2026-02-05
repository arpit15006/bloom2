import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blubloom Interiors | Global Architecture & Interior Design Studio",
  description: "Blubloom Interiors is an award-winning architecture and interior design practice creating exceptional spaces that amplify human experiences. Explore our residential, commercial, and cultural projects.",
  keywords: "interior design, architecture, Blubloom Interiors, residential design, commercial design, hospitality design, sustainable design",
  openGraph: {
    title: "Blubloom Interiors | Global Architecture & Interior Design Studio",
    description: "We design the places where people love to create. A global architecture firm creating exceptional spaces that amplify human experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
