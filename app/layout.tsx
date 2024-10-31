import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedAlert_Base",
  description: "This is the base of the MedAlert project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full bg-slate-400">
      <body>{children}</body>
    </html>
  );
}
