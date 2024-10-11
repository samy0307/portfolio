import { StarsBackground } from "@/components/ui/stars-background";
import Navbar from "./components/navBar/NavbarComponent";
import SandwichMenu from "./components/navBar/SandwichMenu";
import { ThemeProvider } from "./components/navBar/ThemeProvider";
import "./globals.css";
import { ReactNode } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <div className="min-h-screen flex flex-col">
            <ThemeProvider attribute="class" defaultTheme="system">
              <StarsBackground />
              <ShootingStars />
              <SandwichMenu />
              <div className="hidden sm:block">
                <Navbar />
              </div>

              {children}
            </ThemeProvider>
          </div>
        </body>
      </html>
    </>
  );
}
