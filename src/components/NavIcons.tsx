"use client" //Componente para el uso del lado del cliente

import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }
import Link from "next/link"; {/*Importación de next link para el uso de links */ }
import { useRouter } from "next/navigation"; {/*Importación de next navigation como método de navegación - Router */ }
import { useState } from "react"; {/*Importación del hook de usestate por parte de react */ }
import CartModal from "./CartModal"; {/*Importación del componente cartmodal */ }

{/*Componente de navicons */ }
const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false); {/*Permite al hook conocer el estado del perfil del usuario, si esta abierto o cerrado al hacer click */ }
    const [isCartOpen, setIsCartOpen] = useState(false); {/*Permite al hook conocer el estado del carrito, si esta abierto o cerrado al hacer click */ }

    const router = useRouter(); {/*navegación del router */ }

    const isLoggedIn = false; {/*Función que válida si el usuario se loggeo o no, dependiendo lo mandará a la page principal o a la de login */ }
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        }
        setIsProfileOpen((prev) => !prev); {/*Función que válida si el usuario se loggeo o no, dependiendo lo mandará a la page principal o a la de login */ }
    }
    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/perfil.png" alt="Login" width={22} height={22} className="cursor-pointer" onClick={handleProfile} /> {/*Icono del perfil, al hacer click muestra el mismo */}
            {/*Si el perfil está abierto muestra la información */}
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/">Perfil</Link> {/*Link que lleva al perfil del usuario */}
                    <div className="mt-2 cursor-pointer">Cerrar Sesión</div> {/*Se muestra en ventana modal del perfil */}
                </div>
            )}

            <Image src="/notificacion.png" alt="Login" width={22} height={22} className="cursor-pointer" /> {/*Icono de notificaciones */}
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
                {/*Imagen de carrito de compra con función, en caso de dar click y abrir mostrará la ventana modal con información */}
                <Image src="/carro.webp" alt="Login" width={22} height={22} className="cursor-pointer" />
                <div className="absolute -top-4 -right-4 w-6 h- bg-tienda rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    )
}

export default NavIcons
