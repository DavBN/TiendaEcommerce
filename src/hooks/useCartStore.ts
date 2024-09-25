import { create } from "zustand"; //Importación de libreria zustand
import { currentCart } from "@wix/ecom"; //Importación de wix
import { WixClient } from "@/context/WixContext"; //Importación de wix

type CartState = {
    cart: currentCart.Cart; // Estado que almacena los detalles del carrito.
    isLoading: boolean; // Indica si se está cargando o realizando una operación en el carrito.
    counter: number; // Contador de elementos en el carrito.
    getCart: (wixClient: WixClient) => void;  // Función para obtener el carrito actual.
    addItem: (
        wixClient: WixClient,
        productId: string,
        variantId: string,
        quantity: number
    ) => void; //añadir un ítem al carrito.
    removeItem: (wixClient: WixClient, itemId: string) => void; //remover un ítem del carrito.
};

export const useCartStore = create<CartState>((set) => ({
    cart: [], //carrito está vacío.
    isLoading: true, //comienza en true proceso de carga
    counter: 0, //contador en 0

    // Función para obtener el carrito actual
    getCart: async (wixClient) => {
        try {
            const cart = await wixClient.currentCart.getCurrentCart(); // // Obtiene el carrito actual del cliente.
            set({
                cart: cart || [], // Si se obtiene un carrito, se establece en el estado, de lo contrario, es un array vacío.
                isLoading: false, // Se establece isLoading a false, ya que la operación ha terminado.
                counter: cart?.lineItems.length || 0, // Se actualiza el contador de elementos en el carrito.
            });
        } catch (err) {
            set((prev) => ({ ...prev, isLoading: false })); // Si pasa un error, isLoading se establece en false.
        }
    },

    // Función para añadir un ítem al carrito
    addItem: async (wixClient, productId, variantId, quantity) => {
        set((state) => ({ ...state, isLoading: true }));
          // Añade un ítem al carrito a través del cliente de Wix
        const response = await wixClient.currentCart.addToCurrentCart({
            lineItems: [
                {
                    catalogReference: {
                        appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
                        catalogItemId: productId,
                        ...(variantId && { options: { variantId } }), //// Si hay un variantId, lo añade.
                    },
                    quantity: quantity,
                },
            ],
        });

        set({
            cart: response.cart, //Actualiza el carrito con el carrito
            counter: response.cart?.lineItems.length, // // Actualiza el contador de ítems.
            isLoading: false, // Termina la operación
        });
    },

    // Función para remover un ítem del carrito
    removeItem: async (wixClient, itemId) => {
        set((state) => ({ ...state, isLoading: true })); 
         // Remueve el ítem del carrito usando el cliente de Wix
        const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
            [itemId]
        );

        set({
            cart: response.cart, // Actualiza el carrito con la respuesta después de remover el ítem.
            counter: response.cart?.lineItems.length, //Actualiza el contador
            isLoading: false, //Termina la operación
        });
    },
}));

