import Navbar from "./components/navBar/NavbarComponent";
import SandwichMenu from "./components/navBar/SandwichMenu";
import { ThemeProvider } from "./components/navBar/ThemeProvider";
import "./globals.css";
import { ReactNode } from "react";

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
