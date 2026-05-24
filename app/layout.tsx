import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Space_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "The Music Deck — Collectible Music Card Game",
  description:
    "A collectible music card game where players build lineups, open boosters, and battle through genre-based strategy.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "The Music Deck",
    description:
      "Collect song cards, build genre lineups, and battle in festival-style duels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${garamond.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
