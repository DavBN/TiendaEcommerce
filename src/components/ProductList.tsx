import { WixClientContext } from "@/context/WixContext";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }
import Link from "next/link"; {/*Importación de next link para el uso de links */ }
import DOMPurify from "isomorphic-dompurify";
import Pagination from "./Pagination";
import React from 'react';

const PRODUCT_PER_PAGE = 8;

{/*Componente de lista de productos */ }
const ProductList = async ({
    categoryId,
    limit,
    searchParams,
}: {
    categoryId: string;
    limit?: number;
    searchParams?: any; //Incluido el searchParams para la función y el llamado
}) => {
    const wixClient = await wixClientServer();
    const productQuery = wixClient.products
        .queryProducts()
        .startsWith("name", searchParams?.name || "")
        .eq("collectionIds", categoryId)
        .hasSome("productType", searchParams?.type ? [searchParams.type] : ["physical", "digital"])
        .gt("priceData.price", searchParams?.min || 0)
        .lt("priceData.price", searchParams?.max || 999999)
        .limit(limit || PRODUCT_PER_PAGE)
        .skip(
            searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE) : 0
        );
    //.find();

    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" ");

        if (sortType === "asc") {
            productQuery.ascending(sortBy);
        }
        if (sortType === "desc") {
            productQuery.descending(sortBy);
        }
    }

    const res = await productQuery.find();

    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap dark:grayscale"> {/*Div padre */}
            {res.items.map((product: products.Product) => (
                < Link href={"/" + product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={product._id} >
                    <div className="relative w-full h-80 ">
                        <Image src={product.media?.mainMedia?.image?.url || "/product.png"} alt="Bici" fill sizes="25vw" className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500 " />
                        {product.media?.items && (
                            <Image src={product.media?.items[1]?.image?.url || "/product.png"} alt="algo" fill sizes="25vw" className="absolute object-cover rounded-md " />)}

                    </div>
                    <div className="flex justify-between">{/*Información del contenido mostrado */}
                        <span className="font-medium">{product.name}</span>{/*Información del contenido mostrado */}
                        <span className="font-semibold">${product.price?.price}</span>{/*Información del contenido mostrado */}
                    </div>
                    {product.additionalInfoSections && (
                        <div className="text-sm text-gray-500" dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(product.additionalInfoSections.find(
                                (section: any) => section.title === "Descrip"
                            )?.description || ""),
                        }}>
                        </div>
                    )}
                    {/*Botón que al pasar el ratón o hacer click de rellena de color rojo */}
                    < button className="rounded-2xl ring-1 ring-tienda text-tienda w-max py-2 px-4 text-xs hover:bg-tienda hover:text-white" > Agregar al carrito</button>
                </Link >
            ))}
            <Pagination currentPage={res.currentPage || 0} hasPrev={res.hasPrev()} hasNext={res.hasNext()} />
        </div >
    )
}

export default ProductList
