import "./globals.css";
import { Metadata } from "next";
import {Space_Mono} from "next/font/google";

const spaceMono = Space_Mono({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tip Calculator App',
  description: 'Split your bill and calculate tips easily',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>
        {children}
      </body>
    </html>
  );
}
