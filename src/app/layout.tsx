import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Satori Santé - The Members Club",
  description: "An exclusive sanctuary where refinement meets belonging. Experience our private lounge, curated events, and enlightened living in the heart of Sandton.",
  icons: {
    icon: "/SATORI_LOGO.png",
    shortcut: "/SATORI_LOGO.png",
    apple: "/SATORI_LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
