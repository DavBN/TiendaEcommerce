import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }
import Link from "next/link"; {/*Importación de next link para el uso de links */ }

const PRODUCT_PER_PAGE = 8;

{/*Componente de lista de productos */ }
const ProductList = async ({
    categoryId,
    limit,
}: {
    categoryId: string;
    limit?: number;
}) => {

    const wixClient = await wixClientServer();

    const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find(); {/*Llama el método e inicia una consulta de productos */ }
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap"> {/*Div padre */}
            {res.items.map((product:products.Product) => (
                < Link href={"/" + product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={product._id} >
                    <div className="relative w-full h-80">
                        <Image src="/bici.jpg" alt="Bici" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500" />
                        <Image src="/bici1.jpg" alt="Bici" fill sizes="25vw" className="absolute object-cover rounded-md" />
                    </div>
                    <div className="flex justify-between">{/*Información del contenido mostrado */}
                        <span className="font-medium">Nombre producto</span>{/*Información del contenido mostrado */}
                        <span className="font-semibold">$700</span>{/*Información del contenido mostrado */}
                    </div>
                    <div className="text-sm text-gray-500">Descripción producto</div>
                    {/*Botón que al pasar el ratón o hacer click de rellena de color rojo */}
                    < button className="rounded-2xl ring-1 ring-tienda text-tienda w-max py-2 px-4 text-xs hover:bg-tienda hover:text-white" > Agregar al carrito</button>
                </Link >
            ))}
        </div >
    )
}

export default ProductList
