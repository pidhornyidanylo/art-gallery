import type { Metadata } from "next";
import { Inter, Benne } from "next/font/google";
import Container from "@/components/Container";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const benne = Benne({ subsets: ["latin"], weight: "400" }); 

export const metadata: Metadata = {
  title: "psa",
  description: "Created by Danylo Pidhornyi!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${inter.className}` + " flex justify-center w-[100%] h-[100vh] p-2"
        }
      >
        <Container>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
