import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "600", "700"]  });

export const metadata: Metadata = {
  title: "APV - Até a Primeira Vaga",
  description: "ajudando programadores iniciantes a conseguir sua primeira vaga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          {children}
      <Toaster position="top-center" />
        </body>
      <Analytics/>
    </html>
  );
}
