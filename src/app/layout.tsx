import "./globals.css";

import type { Metadata } from "next";
import UILibProvider from "@/providers/UILibProvider";

export const metadata: Metadata = {
  title: "Easy Events",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <UILibProvider>{children}</UILibProvider>
      </body>
    </html>
  );
}