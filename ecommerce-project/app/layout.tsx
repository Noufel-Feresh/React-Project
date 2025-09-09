import type { Metadata } from "next";
import "./globals.css";
import CartProvider from "@/utilitis/CartContext";

export const metadata: Metadata = {
  title: "Ecommerce Basics",
  description: "Ecommerce Basics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}