"use client"  //Declaración del componente para ser usado del lado del cliente

{/*Importaciones necesarias de next image para usar imagenes */ }
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image"
import { useEffect } from "react";

const CartModal = () => {
    {/*Constante del modal del carrito, miniventana al hacer click en el carrito */ }

    {/*Constante de un booleano*/ }
    const cartItems = true;


    //hook de wixclient
    const wixClient = useWixClient();

    // hook que se utiliza para manejar efectos secundarios
    useEffect(() => {
        //obtiene el carrito de compras actual del cliente
        const getCart = async () => {
            //función del cliente Wix que devuelve información del carrito de compras actual
            const response = await wixClient.currentCart.getCurrentCart();
        };
        // inicia la obtención de los datos del carrito.
        getCart();
    }, [wixClient]); //El efecto se ejecutará solo cuando el valor de wixClient cambie.



    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_px_10px_rgb(0,0,0,0.2] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {/*Función para validar el carrito de compras, cambia de false a true y de true a false, depende de los items */}
            {!cartItems ? (
                <div>El carrito está vacío</div>
            ) : (
                <>
                    <h2 className="text-xl">Carrito de compra</h2>{/*Contenido del carrito de compra */}
                    {/*Lista de productos */}
                    <div className="flex flex-col gap-8">{/*Contenido del carrito de compra */}
                        {/* Items */}
                        <div className="flex gap-4">
                            <Image src="" alt="Producto" width={72} height={96} className="object-cover rounded-md" />{/*Contenido del carrito de compra */}
                            <div className="flex flex-col justify-between w-full">
                                {/* Información del producto */}
                                <div>
                                    {/* Titulo del producto */}
                                    <div className="flex items-center justify-between gap-8">{/*Contenido del carrito de compra */}
                                        <h3 className="font-semibold">Nombre producto</h3>{/*Contenido del carrito de compra */}
                                        <div className="p-1 bg-gray-50 rounded-sm">$2.00</div>{/*Contenido del carrito de compra */}
                                    </div>
                                    {/* Descripción del producto */}
                                    <div className="text-sm text-green-500">{/*Contenido del carrito de compra */}
                                        Disponible
                                    </div>
                                </div>
                                {/* Botón */}
                                <div className="flex justify-between text-sm">{/*Contenido del carrito de compra */}
                                    <span className="text-gray-500">2.  2</span>{/*Contenido del carrito de compra */}
                                    <span className="text-red-600">Borrar</span>{/*Contenido del carrito de compra */}
                                </div>
                            </div>
                        </div>
                        {/* Items */}
                        <div className="flex gap-4">
                            <Image src="" alt="Producto" width={72} height={96} className="object-cover rounded-md" /> {/*Contenido del carrito de compra */}
                            <div className="flex flex-col justify-between w-full"> {/*Contenido del carrito de compra */}
                                {/* Información del producto */}
                                <div>
                                    {/* Titulo del producto */}
                                    <div className="flex items-center justify-between gap-8"> {/*Contenido del carrito de compra */}
                                        <h3 className="font-semibold">Nombre producto</h3> {/*Contenido del carrito de compra */}
                                        <div className="p-1 bg-gray-50 rounded-sm">$2.00</div> {/*Contenido del carrito de compra */}
                                    </div>
                                    {/* Descripción del producto */}
                                    <div className="text-sm text-green-500">
                                        Disponible
                                    </div>
                                </div>
                                {/* Botón */}
                                <div className="flex justify-between text-sm"> {/*Contenido del carrito de compra */}
                                    <span className="text-gray-500">2.  2</span> {/*Contenido del carrito de compra */}
                                    <span className="text-red-600">Borrar</span> {/*Contenido del carrito de compra */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Botón */}
                    <div>
                        <div className="flex items-center justify-between font-semibold"> {/*Contenido del carrito de compra */}
                            <span>Subtotal</span> {/*Contenido del carrito de compra */}
                            <span>$2.00</span> {/*Contenido del carrito de compra */}
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Este producto está disponible para su venta
                        </p>
                        <div className="flex justify-between text-sm"> {/*Contenido del carrito de compra */}
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-400">Ver carrito</button> {/*Contenido del carrito de compra */}
                            <button className="rounded-md py-3 px-4 bg-black text-white">Pagar</button> {/*Contenido del carrito de compra */}
                            <h2 className="text-xl"></h2>  {/*Contenido del carrito de compra */}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartModal
