import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { StoreModalProvider } from "@/Providers/store-modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Admin dashboard configuration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <StoreModalProvider />
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
