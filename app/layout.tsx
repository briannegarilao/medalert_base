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
    <html lang="en" className="h-screen" data-theme="wireframe">
      <body className="flex min-h-screen items-center justify-center">
        {children}
      </body>
    </html>
  );
}
