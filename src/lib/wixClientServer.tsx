import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
    let refreshToken;

    try {
        const cookieStore = cookies();
        const refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");

    } catch (e) {}

    const wixClient = createClient({

        modules: { // Define los módulos que se utilizarán en la aplicación
            products,
            collections, //Maneja los productos almacenados

        },
        auth: OAuthStrategy({ //Maneja la parte de la autenticación 
            clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!, //Variable de entorno para el uso del id proporcionado por wix
            tokens: { //Manejo de tokens
                refreshToken, //Token actualizado
                accessToken: { value: "", expiresAt: 0 }, //Token con valor inicial en 0 para posterior uso
            },
        }),
    });
    return wixClient;
}