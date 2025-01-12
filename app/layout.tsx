import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Set up the Nunito font with the required subsets and variable
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"], // Add additional subsets if needed, e.g., ["latin", "latin-ext"]
  weight:["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Software Craftsman | Just-Felix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

