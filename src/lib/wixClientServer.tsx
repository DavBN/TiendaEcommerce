
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => { //Función asincronica para obtener el refresh de las cookies y procesarlo
    let refreshToken; {/*Variable de refreshToken sin valor inicial */}

    {/*Bloque de try catch para manejo de errores en caso tal */}
    try {
        const cookieStore = cookies();
        refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}"); {/*Conversión de datos a json */}

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