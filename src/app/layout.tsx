import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { Button } from "@/components/ui/button";

import { Sparkles, Settings, AlertCircle } from 'lucide-react'
import { useState } from "react";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Allprotect",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {  
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Navigation/>
      </body>
    </html>
  );
}
