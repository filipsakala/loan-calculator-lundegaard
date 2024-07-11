import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import RecoilProvider from "./RecoilProvider";
import QueryProvider from "./QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyBank - Dej nám svoje peníze 😿",
  description: "😿😿😿😿😿",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <RecoilProvider>
        <QueryProvider>
          <html lang="en">
            <body className={inter.className}>{children}</body>
          </html>
        </QueryProvider>
      </RecoilProvider>
    </StoreProvider>
  );
}
