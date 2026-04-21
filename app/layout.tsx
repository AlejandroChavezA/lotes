import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gestión de Lotes",
  description: "Sistema de gestión de venta y renta de lotes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}