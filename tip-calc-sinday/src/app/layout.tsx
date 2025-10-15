import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "tip-calc-sinday",
  description: "A tip calculator app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>      
        {children}
      </body>
    </html>
  );
}
