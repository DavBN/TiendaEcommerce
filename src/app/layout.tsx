import type { Metadata } from "next";           {/*Importación de los componentes a usar  */}
import { Inter } from "next/font/google";       {/*Importación de los componentes a usar  */}
import "./globals.css";                         {/*Importación de los componentes a usar  */}
import Navbar from "@/components/Navbar";       {/*Importación de los componentes a usar  */}
import Footer from "@/components/Footer";       {/*Importación de los componentes a usar  */}

const inter = Inter({ subsets: ["latin"] });     {/*Aplicación de los estilos fuente, por medio del constante inter */}

  {/*el export del metadata que contiene el titulo y la descripción de la página o proyecto */}
export const metadata: Metadata = {            
  title: "Tienda virtual",
  description: "Tienda virtual para venta de productos",
};

{/*La función children propia de react */}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>    {/*Importación del componente navbar para ser visualizado en el layout principal */}
        {children}
        <Footer/>    {/*Importación del componente footer para ser visualizado en el layout principal */}
        </body>
    </html>
  );
}
