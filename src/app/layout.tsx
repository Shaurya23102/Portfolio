import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shaurya Kumar | Portfolio",
  description:
    "Portfolio of Shaurya Kumar — AI/ML Engineer & Full-Stack Developer. Student at IIIT Naya Raipur.",
  keywords: [
    "Shaurya Kumar",
    "AI",
    "ML",
    "Full-Stack Developer",
    "IIIT Naya Raipur",
    "Portfolio",
  ],
  openGraph: {
    title: "Shaurya Kumar | Portfolio",
    description:
      "AI/ML Engineer & Full-Stack Developer — Building intelligent systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
