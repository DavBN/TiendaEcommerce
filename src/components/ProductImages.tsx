"use client"; {/*Componente del lado de uso del cliente */ }

import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }
import { useState } from "react"; {/*Importación del hook de react para el mapeo de las imagenes*/ }

{/*Constante de images para el array de objetos */ }
// const images = [

//     {
//         id: 1, //id del objeto
//         url: "/bicicleta.webp", // url de donde se encuentra
//     },
//     {
//         id: 2,//id del objeto
//         url: "/bici4.webp",// url de donde se encuentra
//     },
//     {
//         id: 3,//id del objeto
//         url: "/bici5.webp",// url de donde se encuentra
//     },
//     {
//         id: 4,//id del objeto
//         url: "/bici6.webp",// url de donde se encuentra
//     },
// ];

{/*Constante del componente productimages */ }
const ProductImages = ({items}: {items: any}) => {
    const [index, setIndex] = useState(0); {/*Constante para el index y hacer uso del usestate que me permite hacer el mapeo de las imagenes */ }
    return (
        <div className="">{/*Div padre */}
            <div className="h-[400px] relative">{/*Tamaños del div */}
                <Image src={items[index].image?.url} alt="imagen" fill sizes="50vw" className="object-contain rounded-md" /> {/*imagenes, por medio del index */}
            </div>
            <div className="flex justify-between gap-4 mt-8"> {/*Tamaños del div y ajustes para adaptación de pantalla */}
                {/*Mapeo de imagenes */}
                {items.map((item:any, i:number) => (
                    <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={item._id} onClick={() => setIndex(i)}> {/*Función y onlick para mostrar otra imagen */}
                        <Image
                            src={item.image?.url}
                            alt=""
                            fill
                            sizes="30vw" // Tamaño más pequeño para las imagenes que se muestran debajo de la primera visual
                            className="object-contain rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductImages