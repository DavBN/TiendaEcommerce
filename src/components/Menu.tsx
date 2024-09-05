"use client" //Uso del componente del lado del cliente 

import Image from "next/image"; {/*Importaciones de los componentes de next */ }
import Link from "next/link"; {/*Importaciones de los componentes de next */ }
import { useState } from "react"; {/*Importación del usestate por parte de react */ }

{/*Constante del menú hamburguesa para dispositivos móviles */ }
const Menu = () => {
    {/*Función que permite la ventana modal del menú si este se abre o se cierra */ }
    const [open, setOpen] = useState(false)
    return (
        <div>
            {/*Imagen del icono para el menú, con función onlick y realizar la acción al dar click sobre el icono */}
            <Image src="/menu.png" alt="Imagen logo" width={28} height={28} className="cursor-pointer" onClick={() => setOpen((prev) => !prev)} />
            {open && (
                <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                    <Link href="/">Página principal</Link> {/*Direccionamiento de página de acuerdo al componente */}
                    <Link href="/">Tienda</Link>{/*Direccionamiento de página de acuerdo al componente */}
                    <Link href="/">Ofertas</Link>{/*Direccionamiento de página de acuerdo al componente */}
                    <Link href="/">Sobre nosotros</Link>{/*Direccionamiento de página de acuerdo al componente */}
                    <Link href="/">Contacto</Link>{/*Direccionamiento de página de acuerdo al componente */}
                    <Link href="/">Logout</Link>{/*Direccionamiento de página de acuerdo al componente */}
                    <Link href="/">Carrito(1)</Link>{/*Direccionamiento de página de acuerdo al componente */}
                </div>
            )}
        </div>
    )
}

export default Menu
