"use client";
import { products } from '@wix/stores'
import React, { useState } from 'react'

{/*Componente de CustomizeProducts */ }
{/*permite almacenar las decisiones del usuario respecto a las opciones de personalización. 
Eventualmente, setSelectedOptions se usará para actualizar este estado a medida que el usuario seleccione diferentes opciones */}
const CustomizeProducts = ({
    productId,
    variants,
    productOptions,
}: {
    productId: string;
    variants: products.Variant[];
    productOptions: products.ProductOption[];
}) => {
    const [selectedOptions, setSelectedOptions] = useState<{
        [key: string]: string;
    }>({});

    {/*handleOptionSelect actualiza las opciones seleccionadas por el usuario. */ }
    const handleOptionSelect = (optionType: string, choice: string) => {
        setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
    }

    {/*isVariantInStock verifica si alguna de las variantes del producto, que coincida con las opciones seleccionadas, está disponible en stock. */ }
    const isVariantInStock = (choices: { [key: string]: string }) => {
        return variants.some((variant) => {
            const variantChoices = variant.choices;
            if (!variantChoices) return false;

            return (
                Object.entries(choices).every(
                    ([key, value]) => variantChoices[key] === value
                ) && variant.stock?.inStock && variant.stock?.quantity && variant.stock?.quantity > 0
            );
        });
    };


    {/*bloque de código con el mapeo de la opción del tamaño y color del producto */ }
    return (
        <div className='flex flex-col gap-6'> {/*Div padre */}
            {productOptions.map((option) => (
                <div className='flex flex-col gap-4' key={option.name}>
                    <h4 className='font-medium'>Elige {option.name}</h4>
                    {option.choices?.map((choice) => {
                        const disabled = !isVariantInStock({
                            ...selectedOptions,
                            [option.name!]: choice.description!,
                        });

                        const selected =
                            selectedOptions[option.name!] === choice.description;
                        return (
                            <div className='' key={choice.value} onClick={() => handleOptionSelect(option.name!, choice.description!)
                            }
                            >
                                {choice.description}{disabled && "disabled"}{selected && "selected"}
                            </div>
                        );
                    })}
                </div>
            ))}


            {/*Colores */}
            {/* // 
                // <ul className='flex items-center gap-3'> 
                //     <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-600'>
                //         <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                //     </li>
                //     <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-600'></li>
                //     <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-blue-600'>
                //         <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                //     </li>
                // </ul> */}

            {/*otros colores */}
            {/* <h4 className='font-medium'>Elige el tamaño de tu bici</h4> 
            <ul className='flex items-center gap-3'>
                <li className='ring-1 ring-gray-200  text-red rounded-md py-1 px-4 text-sm cursor-pointer'> 
                    Pequeña
                </li>
                <li className='ring-1 ring-gray-200  text-white  bg-tienda rounded-md py-1 px-4 text-sm cursor-pointer'> 
                    Mediana
                </li>
                <li className='ring-1 ring-gray-200  text-white bg-red-300 rounded-md py-1 px-4 text-sm cursor-not-allowed'> 
                    Grande
                </li>
            </ul> */}
        </div>
    )
}

export default CustomizeProducts