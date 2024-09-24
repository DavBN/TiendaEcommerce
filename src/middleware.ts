import { createClient, OAuthStrategy } from "@wix/sdk"; // Sdk de wix para un cliente de la api que maneja la autenticación de wix
import { NextRequest, NextResponse } from "next/server"; // importación de nextserver para el manejor de solicitudes y respuestas

//función asíncrona
export const middleware = async (request: NextRequest) => {
    const cookies = request.cookies; //Obtención de cookies por medio de la solicitud
    const res = NextResponse.next(); // Respuesta inicial para continuar con el flujo

    if (cookies.get("refreshToken")) {
       return res; //Si el valor esta presente se devuelve la respuesta sin ninguna otra acción
    }

    const wixClient = createClient({
        auth: OAuthStrategy({clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!}), //De no haber token se crea el cliente de wix y proporciona el clientId desde la variable de entorno
    });

    const tokens = await wixClient.auth.generateVisitorTokens(); //Genera nuevo tokens de visita que da acceso y refresca el token
    res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
        maxAge: 60 * 60 * 24 * 30,
    });

    return res;
};