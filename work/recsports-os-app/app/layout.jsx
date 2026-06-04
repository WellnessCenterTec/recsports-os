import "./globals.css";

export const metadata = {
  title: "RecSports OS",
  description: "Plataforma operativa para Direccion Deportiva"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
