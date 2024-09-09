import Add from "@/components/Add"; {/*Importación del componente Add */ }
import CustomizeProducts from "@/components/CustomizeProducts"; {/*Importación del componente customizeproducts */ }
import ProductImages from "@/components/ProductImages"; {/*Importación del componente productimages */ }

const SinglePage = () => {
    {/*SinglePage para las páginas */ }
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/*imagenes */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages /> {/*Importación del componente productimages */}
            </div>
            {/*Texto */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4x font-medium">Nombre producto</h1> {/*Titulo del h1 que muestra el producto */}
                <p className="text-gray-500"> {/*Parrafo con descripción del producto */}
                    La mejor marca del mercado. Specialized, bicicletas de alto confort y resistencia diseñadas para todo tipo de terreno
                </p>
                <div className="h-[2px] bg-gray-100" /> {/*Div contenedor */}
                <div className="flex items-center gap-4"> {/*Div padre para contener los precios con ajuste de tamaño */}
                    <h3 className="text-xl text-gray-500 line-through">$1200</h3> {/*Precio anterior */}
                    <h3 className="font-medium text-2xl">$1000</h3> {/*Precio nuevo */}
                </div>
                <div className="h-[2px] bg-gray-100" />
                <CustomizeProducts />
                <Add />
                <div className="h-[2px] bg-gray-100" />{/*Div contenedor */}
                <div className="text-sm">
                    <h4 className="font-medium mb-4">Título</h4> {/*Información de los productos */}
                    <p>{/*Información de los productos */}
                        La mejor marca del mercado. Specialized, bicicletas de alto confort y resistencia diseñadas para todo tipo de terreno
                    </p>
                </div>
                <div className="text-sm">{/*Información de los productos */}
                    <h4 className="font-medium mb-4">Título</h4>{/*Información de los productos */}
                    <p>{/*Información de los productos */}
                        La mejor marca del mercado. Specialized, bicicletas de alto confort y resistencia diseñadas para todo tipo de terreno
                    </p>
                </div>
                <div className="text-sm">{/*Información de los productos */}
                    <h4 className="font-medium mb-4">Título</h4>{/*Información de los productos */}
                    <p>{/*Información de los productos */}
                        La mejor marca del mercado. Specialized, bicicletas de alto confort y resistencia diseñadas para todo tipo de terreno
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SinglePage               
