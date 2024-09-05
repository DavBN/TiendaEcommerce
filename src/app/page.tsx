import CategoryList from "@/components/CategoryList";     {/*Importaciones de los componentes necesarios */}
import ProductList from "@/components/ProductList";       {/*Importaciones de los componentes necesarios */}
import Slider from "@/components/Slider";                 {/*Importaciones de los componentes necesarios */}

{/*Función que contiene las 3 categorías que se muestran en el body de la página principal */}
export default function Home() {
  return (
    <main>
      <Slider/>  {/*Implementación del slider principal que va después del navbar */}
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Productos</h1>     {/*Sección prodductos */}
      <ProductList/> {/*Lista de productos */}
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categorías</h1>   {/*Sección categorías */}
      <CategoryList />  {/*Categoría de productos */}
      </div>
      <div className="mt-24  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Nuevos productos</h1>   {/*Sección Nuevos productos */}
      <ProductList/> {/*Lista de productos */}
      </div>
    </main>
  );
}
