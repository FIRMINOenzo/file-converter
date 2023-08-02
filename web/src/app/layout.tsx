import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "File Converter",
  description: "Convert any PDF file to DOCX file and vice versa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-textColor px-7`}>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
