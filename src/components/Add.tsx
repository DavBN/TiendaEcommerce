"use client"; {/*Componente del lado de uso del cliente */ }
import { useCartStore } from '@/hooks/useCartStore';
import { useWixClient } from '@/hooks/useWixClient';
import React, { useState } from 'react'; {/*Importación del hook usestate */ }


{/*Componente Add */ }
export const Add = ({
    productId,
    variantId,
    stockNumber,
}: {
    productId: string;
    variantId: string;
    stockNumber: number;
}) => {
    const [quantity, setQuantity] = useState(1); {/*Uso del hook dentro de la constante para la cantidad de productos */ }

    {/*Constante temporal para probar funcionalidad */ }
    //const stock = 4;

    {/*Función para el aumento o disminución de cantidad, disminuye solo si es mayor que 1 y aumenta la cantidad si solo es menor que el stock disponible */ }
    const handleQuantity = (type: "i" | "d") => {
        if (type === "d" && quantity > 1) {
            setQuantity((prev) => prev - 1); {/*I incrementa */ }
        }
        if (type === "i" && quantity < stockNumber) {
            setQuantity((prev) => prev + 1); {/*D Disminute */ }
        }
    };

    //Uso del hook de wix client
    const wixClient = useWixClient();

    const { addItem, isLoading } = useCartStore();


    return (
        <div className='flex flex-col gap-4 dark:grayscale dark:text-black' > {/*Div contenedor principal */}
            <h4 className='font-medium'>Elige la cantidad</h4> {/*Título de la sección para selección de cantidad de producto */}
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32'>
                        <button className='cursor-pointer text-xl' onClick={() => handleQuantity("d")}>-</button>
                        {quantity}
                        <button className='cursor-pointer text-xl' onClick={() => handleQuantity("i")}>+</button>
                    </div>
                    {/*Función para conocer el stock del producto, de lo contrario muestra el mensaje en el botón de cantidad de productos. */}
                    {stockNumber < 1 ? (
                        <div className='text-xs'>El producto está agotado</div>
                    ) : (
                        <div className='text-xs'>
                            Solo < span className='text-orange-500'>{stockNumber}   Productos</span> quedan <br /> {"No lo"}{" "} dejes pasar
                        </div>
                    )}
                </div>

                {/*Botón con función de hover para que al pasar el mouse se rellene de rojo */}
                <button 
                onClick={() => addItem(wixClient, productId, variantId, quantity)}
                disabled={isLoading}
                className='w-36 text-sm rounded-3xl ring-1 ring-tienda text-red-500 py-2 px-4
         hover:bg-tienda hover:text-white disabled:cursor-not-allowed disabled:bg-red-300 disabled:ring-0 disabled:text-white disabled:ring-none'>
            Agregar al carro
                </button>
            </div >
        </div >
    )
}

export default Add
