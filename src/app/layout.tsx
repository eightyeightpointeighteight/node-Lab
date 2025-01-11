import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TopNavigation } from "@/components/custom/navigation";




 
const inter = Inter({
  subsets: ['latin'],
})
 


export const metadata: Metadata = {
  title: "NodeLab",
  description: "fondlin nodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}
