import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppMori = localFont({
  src: [
    { path: "../fonts/PPMori-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/PPMori-RegularItalic.ttf", weight: "400", style: "italic" },
    { path: "../fonts/PPMori-Bold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/PPMori-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-body",
  display: "swap",
});

const ppValve = localFont({
  src: [
    { path: "../fonts/PPValve-PlainMedium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/PPValve-PlainExtrabold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BMDX — Black Math Design System",
  description: "Component library styled after the Black Math design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppMori.variable} ${ppValve.variable}`}>
      <body>{children}</body>
    </html>
  );
}
