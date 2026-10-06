
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import "./globals.css";
import Header from "@/components/layout/Header";


export const metadata: Metadata = {
  title: "Академия Государственного управления при Президенте Республики Таджикистан",
  description: "Официальный сайт Академии Государственного управления при Президенте Республики Таджикистан",
};





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}