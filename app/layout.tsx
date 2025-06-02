import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serenity",
  description:
    " Discover Exclusive Luxury Real Estate Deals | Dream Homes in Top Locations Explore limited-time offers on high-end properties across the U.S., including oceanfront villas in Malibu, modern lofts in New York, secluded mountain cabins in Wyoming, and tropical bungalows in Hawaii. Find your perfect dream home with detailed listings featuring price, size, location, and amenities. Start your journey to luxury living today! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased `}>{children}</body>
    </html>
  );
}
