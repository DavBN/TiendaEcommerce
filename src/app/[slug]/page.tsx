
import ProductImages from "@/components/ProductImages"; {/*Importación del componente productimages */}

const SinglePage = () => {
    {/*SinglePage para las páginas */ }
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/*imagenes */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages /> {/*Importación del componente productimages */}
            </div>
            {/*Texto */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6"></div>
        </div>
    )
}

export default SinglePage               
