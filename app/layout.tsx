import type { Metadata } from "next";
import "./globals.css";

import { LoginLink } from "@/components/LoginLink";
import { GoHomeLink } from "@/components/GoHomeLink";
import { BlueskyLink } from "@/components/BlueskyLink";

export const metadata: Metadata = {
  title: "Love & Light Motherfuckers",
  description: "Clever Crew '24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased p-4 bg-background h-[100dvh] w-screen flex flex-col items-center justify-center">
        {children}
        <GoHomeLink />
        <LoginLink />
        <BlueskyLink />
      </body>
    </html>
  );
}
