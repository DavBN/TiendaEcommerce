"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const slides = [
    {
        id: 1,
        title: "Producto",
        description: "Sale",
        img: "/bici1.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200",
    },
    {
        id: 2,
        title: "Producto",
        description: "Sale",
        img: "/bici.jpg",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200",
    },
]
const Slider = () => {

    const [current, setCurrent] = useState(0)
    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000">
                {slides.map((slide) => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`} key={slide.id}>
                        {/*Contenedor del texto */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className="rounded-md bg-black text-white py-3 px-4">¡Comprar ahora!</button>
                            </Link>
                        </div>
                        {/*Contenedor de imagen */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image src={slide.img} alt="Imagen bici" fill sizes="100%" className="object-cover"/>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Slider