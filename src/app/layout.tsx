import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Академия Государственного управления при Президенте Республики Таджикистан",
  description:
    "Официальный сайт Академии Государственного управления при Президенте Республики Таджикистан",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={poppins.variable}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
