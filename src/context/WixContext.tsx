"use client"; {/*Uso del componente del lado del cliente */ }
import { createClient, OAuthStrategy } from "@wix/sdk"; {/*Impoprtación de autenticación y el sdk de wix */ }
import { products, collections } from "@wix/stores"; {/*Importación para el uso del storage de wix donde están los productos almacenados */ }
import Cookies from "js-cookie"; import { Children, ReactNode } from "react";
import { createContext } from "react";
{/*Cookies de javascript para el servidor */ }

{/* Constante que intenta recuperar el valor de la cookie "refreshToken", lo convierte de una cadena JSON a un objeto JavaScript, 
    y si no encuentra la cookie devuelve un objeto vacío*/}
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}")

{/*Constante del componente de para el uso de wix */ }
const wixClient = createClient({

    modules: { // Define los módulos que se utilizarán en la aplicación
        products,
        collections, //Maneja los productos almacenados
        //currentCart, //Maneja el carrito de compras
    },
    auth: OAuthStrategy({ //Maneja la parte de la autenticación 
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!, //Variable de entorno para el uso del id proporcionado por wix
        tokens: { //Manejo de tokens
            refreshToken, //Token actualizado
            accessToken: { value: "", expiresAt: 0 }, //Token con valor inicial en 0 para posterior uso
        },
    }),
});

export type WixClient = typeof wixClient; {/*Encargado de interactuar con los servidores de wix */ }

export const WixClientContext = createContext<WixClient>(wixClient); {/*Contexto de react para que los componente puedan consumir el wixclient */ }

export const WixClientContextProvider = ({ // Envuelve otros componentes, proporcionando el valor de wixClient
    children, //Objeto de ReactNode
}: {
    children: ReactNode;
}) => {
    return <WixClientContext.Provider value={wixClient}>{children}</WixClientContext.Provider>; {/*permite que cualquier componente hijo acceda a wixClient a través del contexto de React */ }
}