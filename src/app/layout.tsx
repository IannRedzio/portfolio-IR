import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Portfolio Personal Ian Redzio",
  description: "Mi portfolio de desarrollo y diseño",
};

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen font-sans antialiased">
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-card shadow-sm border-b border-border">
          <Navbar />
        </header>
        {children}
        <footer className="bg-primary/10 text-foreground py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-2xl font-bold mb-4 md:mb-0 text-primary">Portfolio</div>
              <div className="flex space-x-4">
                <Link href="#about" scroll={false} className="text-foreground hover:text-primary transition-colors">
                  Sobre mí
                </Link>
                <Link href="#projects" scroll={false} className="text-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
                <Link href="#contact" scroll={false} className="text-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
            <div className="text-center mt-8 text-sm text-muted-foreground">© 2023 Portfolio Personal</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
