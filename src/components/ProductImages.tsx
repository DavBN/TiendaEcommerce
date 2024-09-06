"use client"; {/*Componente del lado de uso del cliente */ }

import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }
import { useState } from "react"; {/*Importación del hook de react para el mapeo de las imagenes*/ }

{/*Constante de images para el array de objetos */ }
const images = [

    {
        id: 1, //id del objeto
        url: "/bicicleta.webp", // url de donde se encuentra
    },
    {
        id: 2,//id del objeto
        url: "/bici4.webp",// url de donde se encuentra
    },
    {
        id: 3,//id del objeto
        url: "/bici5.webp",// url de donde se encuentra
    },
    {
        id: 4,//id del objeto
        url: "/bici6.webp",// url de donde se encuentra
    },
];

{/*Constante del componente productimages */ }
const ProductImages = () => {
    const [index, setIndex] = useState(0); {/*Constante para el index y hacer uso del usestate que me permite hacer el mapeo de las imagenes */ }
    return (
        <div className="">{/*Div padre */}
            <div className="h-[500px] relative">{/*Tamaños del div */}
                <Image src={images[index].url} alt="imagen" fill sizes="50vw" className="object-cover rounded-md" /> {/*imagenes, por medio del index */}
            </div>
            <div className="flex justify-between gap-4 mt-8"> {/*Tamaños del div y ajustes para adaptación de pantalla */}
                {/*Mapeo de imagenes */}
                {images.map((img, i) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}> {/*Función y onlick para mostrar otra imagen */}
                        <Image
                            src={img.url}
                            alt=""
                            fill
                            sizes="30vw" // Tamaño más pequeño para las imagenes que se muestran debajo de la primera visual
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductImages