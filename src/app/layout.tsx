import NavbarCenter from "./components/navBar/NavbarComponent";
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarCenter />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
