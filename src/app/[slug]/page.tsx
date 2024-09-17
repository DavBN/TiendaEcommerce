import Add from "@/components/Add"; {/*Importación del componente Add */ }
import CustomizeProducts from "@/components/CustomizeProducts"; {/*Importación del componente customizeproducts */ }
import ProductImages from "@/components/ProductImages"; import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import { notFound } from "next/navigation";
import DOMPurify from 'dompurify';


{/*Importación del componente productimages */ }

const SinglePage = async ({ params }: { params: { slug: string } }) => {

    const wixClient = await wixClientServer();
    const products = await wixClient.products
        .queryProducts()
        .eq("slug", params.slug)
        .find();

    if (!products.items[0]) {
        return notFound();
    }


    const product = products.items[0];

    {/*SinglePage para las páginas */ }
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/*imagenes */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages items={product.media?.items} /> {/*Importación del componente productimages */}
            </div>
            {/*Texto */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">{product.name}</h1> {/*Titulo del h1 que muestra el producto */}
                {product.description && product.description.trim() !== '' && (
                    <p className="text-gray-500">
                        {/* Párrafo con descripción del producto */}
                        {product.description}
                    </p>
                )}
                <div className="h-[2px] bg-gray-100" /> {/*Div contenedor */}
                {product.price?.price === product.price?.discountedPrice ? (
                    <h2 className="font-medium text-2xl">${product.price?.price}</h2>
                ) : (
                    <div className="flex items-center gap-4"> {/*Div padre para contener los precios con ajuste de tamaño */}
                        <h3 className="text-xl text-gray-500 line-through">${product.price?.price}</h3> {/*Precio anterior */}
                        <h3 className="font-medium text-2xl">${product.price?.discountedPrice}</h3> {/*Precio nuevo */}
                    </div>
                )}

                {/*crea un separador visual y, si el producto tiene variantes y opciones de personalización disponibles, renderiza el componente CustomizeProducts */}
                <div className="h-[2px] bg-gray-100" />
                {product.variants && product.productOptions ? (
                    <CustomizeProducts
                        productId={product._id!}
                        variants={product.variants}
                        productOptions={product.productOptions} />
                ) : (
                    <Add productId={product._id!} variantId="00000000-0000-0000-0000-000000000000" stockNumber={product.stock?.quantity || 0} />
                )}

                <div className="h-[2px] bg-gray-100" />{/*Div contenedor */}
                {product.additionalInfoSections?.map((section: any) => (
                    <div className="text-sm" key={section.title}>
                        <h4 className="font-medium mb-4">{section.title}</h4> {/*Información de los productos */}
                        <p>{/*Información de los productos */}
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SinglePage               
