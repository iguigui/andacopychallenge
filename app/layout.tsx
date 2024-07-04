import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anda Pirate",
  description:
    "Nous sommes une communauté de cracks passionnés par la cyber-sécurité et l'ensemble des disciplines de l'informatique.",
  keywords:
    "hacking, piracy, white, hat, crack, warez, tiktok, discord, linux, bash, c2, crow, trojan, virus, malware, cyber, security, osint, bot, lookup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="flex flex-col h-[100vh] page-services">
          <Header />
          <main className="flex-grow mx-4 p-4 border-2 border-green-400 h-[calc(100vh - 98px)] overflow-x-hidden overflow-y-auto rounded-lg">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
