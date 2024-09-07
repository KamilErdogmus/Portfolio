import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransiton from "@/components/PageTransiton";
import StairEffect from "@/components/StairEffect";

const JB = JetBrains_Mono({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  variable: "--font-JetBrains_Mono",
});

export const metadata: Metadata = {
  title: "Kâmil Erdogmus",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JB.variable}>
        <Header />
        <StairEffect />
        <PageTransiton>{children}</PageTransiton>
      </body>
    </html>
  );
}
