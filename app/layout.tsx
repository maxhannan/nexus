// app/layout.tsx
import "./globals.css";
import { Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${figtree.className} transition-all duration-200`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar />
            <div className="h-16" />
            <div className="container mx-auto">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
