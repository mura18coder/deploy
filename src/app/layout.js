import "./globals.css";
import Navbar from "./components/NavBar/Navbar.jsx"; // Importa tu nuevo componente

export const metadata = {
  title: "Deploy - Despliega tu emprendimiento",
  description: "La plataforma de despliegue más rápida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar /> {/* El Navbar vivirá aquí siempre */}
        {children}  {/* Aquí se renderiza el contenido de page.js */}
      </body>
    </html>
  );
}