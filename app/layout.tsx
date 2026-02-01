import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Switched to Outfit for a more premium, modern tech look
import "./globals.css";
import ResponsiveNavbar from "@/components/home/navbar/ResponsiveNavbar";
import Footer from "@/components/home/footer/Footer";

const font = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Varied weights for better typography hierarchy
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedchaudhari.vercel.app"),
  title: {
    default: "Ved Chaudhari | Backend Engineer & Real-Time Systems Specialist",
    template: "%s | Ved Chaudhari"
  },
  description: "Backend Engineer specializing in scalable Node.js systems, Microservices, Redis, RabbitMQ, and AWS. Building high-performance, real-time applications.",
  keywords: [
    "Ved Chaudhari",
    "Backend Engineer",
    "Node.js Developer",
    "Microservices",
    "System Design",
    "AWS",
    "Docker",
    "Redis",
    "RabbitMQ",
    "Full Stack Developer",
    "Web Development"
  ],
  authors: [{ name: "Ved Chaudhari", url: "https://vedchaudhari.vercel.app" }],
  creator: "Ved Chaudhari",
  publisher: "Ved Chaudhari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ved Chaudhari | Backend Engineer & Scalable Systems",
    description: "Backend Engineer specializing in scalable Node.js systems, Microservices, and Cloud Infrastructure. View my production-grade projects.",
    url: "https://vedchaudhari.vercel.app",
    siteName: "Ved Chaudhari Portfolio",
    images: [
      {
        url: "/images/og-image.png", // Assuming a generic OG image or the profile one
        width: 1200,
        height: 630,
        alt: "Ved Chaudhari - Backend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ved Chaudhari | Backend Engineer",
    description: "Building scalable backend systems with Node.js, RabbitMQ, and AWS.",
    images: ["/images/og-image.png"],
    creator: "@vedchaudhari", // Placeholder if not known, or remove if unsure. Keeping safe general structure.
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: "/favicon.ico",
  }
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
