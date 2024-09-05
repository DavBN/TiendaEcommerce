"use client" //Uso del componente del lado del cliente

import Image from "next/image"; {/*Importación de next image para implementación de imagenes */ }
import Link from "next/link"; {/*Importación de next link para el uso de links */ }
import { useEffect, useState } from "react"; {/*Importación de los hooks para métodos proveniente de react */ }

{/*Array de objetos para posterios uso del slider que va debajo del navbar principal */ }
const slides = [
    {
        id: 1,
        title: "Colección 2024",
        description: "¡Hola rider!",
        img: "/bici1.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200",
    },
    {
        id: 2,
        title: "MTB-Ruta-Gravel",
        description: "¡Atreve y disfruta!",
        img: "/bici2.avif",
        url: "/",
        bg: "bg-gradient-to-r from-red-200 via-blue-200 to-pink-200",
    },
    {
        id: 3,
        title: "Producto",
        description: "Sale",
        img: "/bici3.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-green-200 via-orange-200 to-pink-200",
    },
]

{/*Componente slider */ }
const Slider = () => {
    const [current, setCurrent] = useState(0); {/*Función que permite seguir el indice de imagenes del carrusel */ }

    //   useEffect(() => { {/*Función que hace que el carrusel cambie de imagen solo pero visualmente en este proyecto no se ve bien */}
    //      const internal = setInterval(() => {
    //         setCurrent(prev=>(prev === slides.length-1 ? 0 : prev+1)) 
    //      }, 5000);

    //     return () => clearInterval(internal)
    //  }, []); {/*Función que hace que el carrusel cambie de imagen solo pero visualmente en este proyecto no se ve bien */}

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden"> {/*Div padre */}
            {/*Transición del slider al pasarlo */}
            <div className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw )` }}
            >
                {/*Mapeo del slide y me traiga el el array de objetos inicial para mostrar en pantalla */}
                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        {/*Contenedor del texto */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center"> {/*Tamaños */}
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2> {/*Tamaños */}
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>{/*Tamaños */}
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">¡Comprar ahora!</button>{/*Tamaños */}
                            </Link>
                        </div>
                        {/*Contenedor de imagen */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">{/*Tamaños */}
                            <Image src={slide.img} alt="Imagen bici" fill sizes="100%" className="object-cover" />{/*Tamaños */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {/*Mapeo del slide y index */}
                {slides.map((slide, index) => (
                    <div className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center 
                    ${current === index ? "scale-150" : ""}`} key={slide.id}
                        onClick={() => setCurrent(index)}>{/*Función al dar click sobre los iconos del slider se pueda pasar a la siguiente sección */}
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-gray-400 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider