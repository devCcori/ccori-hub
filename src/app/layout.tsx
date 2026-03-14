import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { I18nProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simón Ccorimanya | Full Stack Developer & Security Specialist",
  description: "Analista Programador Full Stack especializado en arquitecturas escalables, Docker, Redis, RabbitMQ y ciberseguridad (eJPT). Ganador 1er puesto Feria ABET UNI.",
  keywords: ["Full Stack Developer", "Ciberseguridad", "eJPT", "Docker", "Proxmox", "PHP", "React", "Node.js", "Lima", "Peru"],
  authors: [{ name: "Simón Ccorimanya Ortiz de Orue" }],
  creator: "Simón Ccorimanya",
  metadataBase: new URL("https://ccori.dev"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ccori.dev",
    title: "Simón Ccorimanya | Full Stack & Security",
    description: "Desarrollador con mentalidad de arquitecto. Especializado en crear soluciones donde el código y la infraestructura convergen de forma segura.",
    siteName: "Ccori Hub",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Simón Ccorimanya - Portfolio"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simón Ccorimanya | Full Stack & Security",
    description: "Full Stack Developer & Security Specialist - eJPT Certified",
    creator: "@devCcori",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#020617]`}
      >
        <I18nProvider>
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
