"use client"

import Image from "next/image"

const CartModal = () => {

    const cartItems = true
    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_px_10px_rgb(0,0,0,0.2] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div>El carrito está vacío</div>
            ) : (
                <>
                    <h2 className="text-xl">Carrito de compra</h2>
                    {/*Lista de productos */}
                    <div className="flex flex-col gap-8">
                        {/* Items */}
                        <div className="flex gap-4">
                            <Image src="" alt="Producto" width={72} height={96} className="object-cover rounded-md" />
                            <div className="flex flex-col justify-between w-full">
                                {/* Información del producto */}
                                <div>
                                    {/* Titulo del producto */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Nombre producto</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$2.00</div>
                                    </div>
                                    {/* Descripción del producto */}
                                    <div className="text-sm text-green-500">
                                        Disponible
                                    </div>
                                </div>
                                {/* Botón */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">2.  2</span>
                                    <span className="text-red-600">Borrar</span>
                                </div>
                            </div>
                        </div>
                        {/* Items */}
                        <div className="flex gap-4">
                            <Image src="" alt="Producto" width={72} height={96} className="object-cover rounded-md" />
                            <div className="flex flex-col justify-between w-full">
                                {/* Información del producto */}
                                <div>
                                    {/* Titulo del producto */}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Nombre producto</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$2.00</div>
                                    </div>
                                    {/* Descripción del producto */}
                                    <div className="text-sm text-green-500">
                                        Disponible
                                    </div>
                                </div>
                                {/* Botón */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">2.  2</span>
                                    <span className="text-red-600">Borrar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Botón */}
                    <div>
                        <div className="flex items-center justify-between font-semibold">
                            <span>Subtotal</span>
                            <span>$2.00</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Este producto está disponible para su venta
                        </p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-400">Ver carrito</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Pagar</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModal
