import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/home/navbar/ResponsiveNavbar";
import Footer from "@/components/home/footer/Footer";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vedchaudhari.vercel.app"),
  title: "Ved Chaudhari | Full Stack Developer Portfolio",
  description: "Portfolio of Ved Chaudhari, a Full Stack Developer specializing in Next.js, React, and modern web technologies. View my projects and skills.",
  keywords: ["Ved Chaudhari", "Portfolio", "Full Stack Developer", "Next.js", "React", "Web Development", "Software Engineer"],
  authors: [{ name: "Ved Chaudhari" }],
  creator: "Ved Chaudhari",
  publisher: "Ved Chaudhari",
  openGraph: {
    title: "Ved Chaudhari | Full Stack Developer Portfolio",
    description: "Portfolio of Ved Chaudhari, a Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    url: "https://vedchaudhari.vercel.app",
    siteName: "Ved Chaudhari Portfolio",
    images: [
      {
        url: "/images/s12.png",
        width: 800,
        height: 600,
        alt: "Ved Chaudhari Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ved Chaudhari | Full Stack Developer Portfolio",
    description: "Portfolio of Ved Chaudhari, a Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    images: ["/images/s12.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vedchaudhari.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
