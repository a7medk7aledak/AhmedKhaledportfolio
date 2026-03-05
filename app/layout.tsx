import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Khaled - Full Stack Developer | MERN Stack Portfolio",
  description: "Ahmed Khaled - Professional Full Stack Developer specializing in MERN Stack (MongoDB, Express, React, Node.js). Communications Engineering student with expertise in web development, machine learning, and competitive programming.",
  keywords: [
    "Ahmed Khaled",
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Alexandria Egypt",
    "Freelancer"
  ],
  authors: [{ name: "Ahmed Khaled" }],
  creator: "Ahmed Khaled",
  publisher: "Ahmed Khaled",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmed-khaled-portfolio.vercel.app",
    title: "Ahmed Khaled - Full Stack Developer Portfolio",
    description: "Professional Full Stack Developer specializing in MERN Stack with expertise in React, Next.js, Node.js, and MongoDB.",
    siteName: "Ahmed Khaled Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Khaled - Full Stack Developer",
    description: "Professional Full Stack Developer specializing in MERN Stack",
    creator: "@a7medk7aledak",
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}