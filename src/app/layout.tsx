import type { Metadata } from "next";
import { DM_Sans, Figtree } from "next/font/google";
import "@/app/globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Webgo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${figtree.variable} font-sans bg-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
