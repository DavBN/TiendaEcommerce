"use client"; {/*Uso del componente del lado del cliente */}

import { WixClientContext } from "@/context/WixContext"; {/*Importación de la constante clientcontext para posterior uso  */}
import { useContext } from "react"; {/*Importación del usecontext */}

{/*Componente de useWixClient*/}
export const useWixClient = () => {
    return useContext(WixClientContext);
};