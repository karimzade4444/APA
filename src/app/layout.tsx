import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
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
    <html lang="en" className={cn("font-sans", montserrat.variable)}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
