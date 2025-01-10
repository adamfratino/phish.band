import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-background h-screen w-screen flex flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}
