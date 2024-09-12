import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "@/components/Container";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "psa",
  description: "Created by Danylo Pidhornyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}` + " flex justify-center w-[100%] h-[100vh] p-2"}>
        <Container>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
