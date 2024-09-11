//"use client"
import CategoryList from "@/components/CategoryList"; {/*Importaciones de los componentes necesarios */ }
import ProductList from "@/components/ProductList"; {/*Importaciones de los componentes necesarios */ }
import Slider from "@/components/Slider"; import { WixClientContext } from "@/context/WixContext";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";
{/*Importaciones de los componentes necesarios */ }

{/*Función que contiene las 3 categorías que se muestran en el body de la página principal */ }
const Home = async () => {

  //const wixClient = useWixClient(); {/*Hook de react que consume el contexto creado previamente WixClientContext */ }

  //{/*useEffect se asegura que el código dentro de el se ejecute cuando el componente se monta, permitiendo hacer llamadas a la API */ }
 // useEffect(() => {
   // const getProducts = async () => { //Función asincronica para obtener los productos
    //  const res = await wixClient.products.queryProducts().find(); {/*Llama el método e inicia una consulta de productos */ }
  //  };

   // getProducts(); {/*Cuándo el componente se monte se llama la función e inicia la consulta de productos */ }
 // }, [wixClient]);

  //const wixClient = await wixClientServer()
  //const res = await wixClient.products.queryProducts().find();

  return (
    <main>
      <Slider />  {/*Implementación del slider principal que va después del navbar */}
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Productos</h1>     {/*Sección prodductos */}
        <Suspense fallback={"loading"}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4}/> {/*Lista de productos */}
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categorías</h1>   {/*Sección categorías */}
        <CategoryList />  {/*Categoría de productos */}
      </div>
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Nuevos productos</h1>   {/*Sección Nuevos productos */}
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} /> {/*Lista de productos */}
      </div>
    </main>
  );
}
export default Home
