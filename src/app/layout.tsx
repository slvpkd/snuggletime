"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppDataProvider } from "@/context";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Snuggletime AI</title>
      </Head>
      <body className={inter.className}>
        <main className=" min-h-screen flex-col justify-between p-2 bg-white">
          <AppDataProvider>
          <Header />
          {children}
          <Footer />
          </AppDataProvider>
        </main>
      </body>
    </html>
  );
}
