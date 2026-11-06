import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

export const metadata: Metadata = {
  title: "Jayavardhan Malamanti — AI/ML Developer & Creative Technologist",
  description:
    "Experimental portfolio of Jayavardhan Malamanti, B.Tech CSE (AI & ML) student and full-stack developer. Building beyond the ordinary with intelligent systems, RAG architectures, and editorial digital experiences.",
  keywords: [
    "Jayavardhan Malamanti",
    "Portfolio",
    "AI/ML Developer",
    "Full-Stack Developer",
    "RAG Applications",
    "Next.js",
    "Python",
    "LangChain",
    "Creative Technologist",
  ],
  authors: [{ name: "Jayavardhan Malamanti" }],
  openGraph: {
    title: "Jayavardhan Malamanti — AI/ML & Full-Stack Developer",
    description: "Building Beyond The Ordinary. Creative Developer Portfolio.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:ital,wght@0,400;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans bg-[#050505] text-[#f5f5f7] antialiased selection:bg-white selection:text-black overflow-x-hidden"
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
