import Filter from "@/components/Filter"; import ProductList from "@/components/ProductList"; import { wixClientServer } from "@/lib/wixClientServer";
{/*Importación del componente filter y productlist */ }
import Image from "next/image"; import { Suspense } from "react";
{/*Importación de next image para el uso de imagenes */ }

const ListPage = async ({ searchParams }: { searchParams: any }) => { //Función que contiene los parámetros de busqueda

    const wixClient = await wixClientServer() //Devuelve una instancia del cliente de wix

    const cat = await wixClient.collections.getCollectionBySlug(searchParams.cat || "all-products"); // extrae el parámetro de búsqueda cat de la URL.

    {/*Página principal para el listado */ }
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative"> {/*Div padre con nos tamaños de ajuste para pantallas */}
            {/*Campaña de publicidad */}
            <div className="hidden bg-gradient-to-r from-green-300 via-orange-300 to-purple-300 px-4 sm:flex justify-between h-64"> {/*Ancho de la clase dentro del contenedor, con color de fondo, hidden para móvil*/}
                <div className="w-2/3 flex flex-col items-center justify-center gap-8"> {/*Ancho de la clase dentro del contenedor */}
                    {/*Tamaños de la clase, estilos y color de letra, como el internileado con leading */}
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-600">30% De descuento en
                        <br /> Productos Seleccionados</h1> {/*Salto de línea para mejor visual */}
                    <button className="rounded-3xl bg-tienda text-white w-max py-3 px-5 text-sm"> {/*Tamaños del botón y estilos del mismo */}
                        ¡Comprar ahora!
                    </button>
                </div>
                <div className="relative w-1/3"> {/*Ancho de la clase dentro del contenedor */}
                    <Image src="/audi.png" alt="imagen del banner" fill className="object-contain" /> {/*Imagen lado derecho del banner */}

                </div>
            </div>
            {/*Filter */}
            <Filter /> {/*Componente de filter.tsx */}
            {/*Productos */}
            <h1 className="mt-12 text-xl font-semibold">Equipamiento para ti!</h1>
            <Suspense fallback={"loading"}>
                <ProductList categoryId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams} />  {/*Componente de productlist.tsx*/}
            </Suspense>
        </div>
    )
}

export default ListPage