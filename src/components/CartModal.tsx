"use client"  //Declaración del componente para ser usado del lado del cliente

{/*Importaciones necesarias de next image para usar imagenes */ }
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image"
import { useEffect } from "react";
import { media as wixMedia } from "@wix/sdk";
import { currentCart } from "@wix/ecom";


const CartModal = () => {
    {/*Constante del modal del carrito, miniventana al hacer click en el carrito */ }

    {/*Constante de un booleano*/ }
    //const cartItems = true;

    const wixClient = useWixClient();
    const { cart, isLoading, removeItem } = useCartStore();

    const handleCheckout = async () => {
        try {
            const checkout = await wixClient.currentCart.createCheckoutFromCurrentCart({
                channelType: currentCart.ChannelType.WEB,
            });

            const { redirectSession } = await wixClient.redirects.createRedirectSession({
                ecomCheckout: { checkoutId: checkout.checkoutId },
                callbacks: {
                    postFlowUrl: window.location.origin,
                    thankYouPageUrl: `{window.location.origin}/success`
                }
            });

            if (redirectSession?.fullUrl) {
                window.location.href = redirectSession.fullUrl;
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-max absolute p-4 rounded-md shadow-[0_px_10px_rgb(0,0,0,0.2] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {/*Función para validar el carrito de compras, cambia de false a true y de true a false, depende de los items */}
            {!cart.lineItems ? (
                <div>El carrito está vacío</div>
            ) : (
                <>
                    <h2 className="text-xl">Carrito de compra</h2>{/*Contenido del carrito de compra */}
                    {/*Lista de productos */}
                    <div className="flex flex-col gap-8">{/*Contenido del carrito de compra */}
                        {/* Items */}
                        {cart.lineItems.map(item => (
                            <div className="flex gap-4" key={item._id}>
                                {item.image && (
                                    <Image src={wixMedia.getScaledToFillImageUrl(
                                        item.image,
                                        72,
                                        96, {}
                                    )}
                                        alt="Producto"
                                        width={72}
                                        height={96}
                                        className="object-cover rounded-md"
                                    />)}
                                <div className="flex flex-col justify-between w-full">
                                    {/* Información del producto */}
                                    <div>
                                        {/* Titulo del producto */}
                                        <div className="flex items-center justify-between gap-8">{/*Contenido del carrito de compra */}
                                            <h3 className="font-semibold">{item.productName?.original}</h3>{/*Contenido del carrito de compra */}
                                            <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                                                {item.quantity && item.quantity > 1 && <div className="text-xs text-green-700">{item.quantity} X </div>}${item.price?.amount}</div>{/*Contenido del carrito de compra */}
                                        </div>
                                        {/* Descripción del producto */}
                                        <div className="text-sm text-green-500">{/*Contenido del carrito de compra */}
                                            {item.availability?.status}
                                        </div>
                                    </div>
                                    {/* Botón */}
                                    <div className="flex justify-between text-sm">{/*Contenido del carrito de compra */}
                                        <span className="text-gray-500">Cantidad: {item.quantity}</span>{/*Contenido del carrito de compra */}
                                        <span className="text-red-600"
                                            style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                                            onClick={() => removeItem(wixClient, item._id!)}>Borrar</span>{/*Contenido del carrito de compra */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*Botón */}
                    <div>
                        <div className="flex items-center justify-between font-semibold"> {/*Contenido del carrito de compra */}
                            <span>Subtotal</span> {/*Contenido del carrito de compra */}
                            <span>${cart.subtotal.amount}</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">
                            Valor a pagar por la cantidad de productos
                        </p>
                        <div className="flex justify-between text-sm"> {/*Contenido del carrito de compra */}
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-400">Ver carrito</button> {/*Contenido del carrito de compra */}
                            <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                                disabled={isLoading}
                                onClick={handleCheckout}
                            >
                                Pagar
                            </button> {/*Contenido del carrito de compra */}
                            <h2 className="text-xl"></h2>  {/*Contenido del carrito de compra */}
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}

export default CartModal
