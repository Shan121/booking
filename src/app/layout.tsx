import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import { openSansFont } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Booking",
  description: "Booking App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSansFont.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
