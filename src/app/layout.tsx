import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gonçalo Sousa",
  description: "Gonçalo Sousa's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('darkMode');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                if (hasPersistedPreference) {
                  return persistedColorPreference === 'true' ? 'dark' : 'light';
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                  return mql.matches ? 'dark' : 'light';
                }
                return 'light';
              }
              const colorMode = getInitialColorMode();
              document.documentElement.setAttribute('data-theme', colorMode);
            })();
          `
        }} />
      </head>
      <body className={`${inter.className} bg-color_main transition duration-300 ease-in-out`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
