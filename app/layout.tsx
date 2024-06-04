import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexserif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-Plex-serif",
});

export const metadata = {
  title: "Bank of America",
  description: "Welcome to Bank of America",
  icons: {
    icon: "./icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexserif.variable}`}>
        {children}
      </body>
    </html>
  );
}
