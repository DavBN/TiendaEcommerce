"use client";
import { products } from '@wix/stores'
import React from 'react'

{/*Componente de CustomizeProducts */ }
const CustomizeProducts = ({
    productId,
    variants,
    productOptions,
}: {
    productId: string;
    variants: products.Variant[];
    productOptions: products.ProductOption[];
}) => {
    return (
        <div className='flex flex-col gap-6'> {/*Div padre */}
            {productOptions.map((option) => (
                <div className='flex flex-col gap-4' key={option.name}>
                    <h4 className='font-medium'>Elige el color {option.name}</h4> {/*Título para mostrar descripción de la sección */}
                    <ul className='flex items-center gap-3'> {/*Lista para ordenar los colores a escoger */}
                        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-600'>{/*Colores a seleccionar */}
                            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        </li>
                        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-600'></li>{/*Colores a seleccionar */}
                        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-blue-600'>{/*Función de color no disponible o no existe */}
                            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />{/*Linea roja en la mitad del circulo */}
                        </li>
                    </ul>
                </div>
            ))}
            <h4 className='font-medium'>Elige el tamaño de tu bici</h4> {/*Título para mostrar descripción de la sección */}
            <ul className='flex items-center gap-3'>{/*Lista para escoger los tamaños */}
                <li className='ring-1 ring-gray-200  text-red rounded-md py-1 px-4 text-sm cursor-pointer'> {/*Seleccióbn 1 */}
                    Pequeña
                </li>
                <li className='ring-1 ring-gray-200  text-white  bg-tienda rounded-md py-1 px-4 text-sm cursor-pointer'> {/*Seleccióbn 2  */}
                    Mediana
                </li>
                <li className='ring-1 ring-gray-200  text-white bg-red-300 rounded-md py-1 px-4 text-sm cursor-not-allowed'> {/*Seleccióbn 3 no disponible */}
                    Grande
                </li>
            </ul>
        </div>
    )
}

export default CustomizeProducts