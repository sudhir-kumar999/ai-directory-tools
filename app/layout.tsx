import "./globals.css";
import type { Metadata } from "next";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ThemeProvider } from "../components/layout/ThemeProvider";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: siteConfig.defaultMetadata.title,
  description: siteConfig.defaultMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        
        <ThemeProvider>
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="container mx-auto px-4 py-6 flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
