"use client" //Componente para el uso del lado del cliente

import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }
import Link from "next/link"; {/*Importación de next link para el uso de links */ }
import { usePathname, useRouter } from "next/navigation"; {/*Importación de next navigation como método de navegación - Router */ }
import { useState } from "react"; {/*Importación del hook de usestate por parte de react */ }
import CartModal from "./CartModal"; import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
{/*Importación del componente cartmodal */ }

{/*Componente de navicons */ }
const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false); {/*Permite al hook conocer el estado del perfil del usuario, si esta abierto o cerrado al hacer click */ }
    const [isCartOpen, setIsCartOpen] = useState(false); {/*Permite al hook conocer el estado del carrito, si esta abierto o cerrado al hacer click */ }
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter(); {/*navegación del router */ }
    const pathName = usePathname();

    const wixClient = useWixClient();
    const isLoggedIn = wixClient.auth.loggedIn();

    // const isLoggedIn = false; {/*Función que válida si el usuario se loggeo o no, dependiendo lo mandará a la page principal o a la de login */ }


    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        } else {
            setIsProfileOpen((prev) => !prev); {/*Función que válida si el usuario se loggeo o no, dependiendo lo mandará a la page principal o a la de login */ }
        }

    };


    //Autorización con wix-manager para el login
    // const wixClient = useWixClient(); //crea una instancia del cliente de Wix utilizando un hook llamado useWixClient
    // // función asíncrona
    // const login = async () => {
    //     {/*genera los datos necesarios para realizar una solicitud de autenticación OAuth y será redirigido al localhost:3000 */ }
    //     const loginRequestData = wixClient.auth.generateOAuthData(
    //         "http://localhost:3000"
    //     );

    //     //Los datos generados para la solicitud de autenticación se guardan en el localStorage del navegador
    //     localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));
    //     //Solicita la url de autenticación authUrl a Wix utilizando los datos generados previamente loginRequestData
    //     const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
    //     //redirige al usuario a la URL de autenticación proporcionada
    //     window.location.href = authUrl;
    // };

    const handleLogout = async () => {
        setIsLoading(true);
        Cookies.remove("refreshToken");
        const { logoutUrl } = await wixClient.auth.logout(window.location.href);
        setIsLoading(false);
        setIsProfileOpen(false);
        router.push(logoutUrl);
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/perfil.png" alt="Login" width={22} height={22} className="cursor-pointer"
                onClick={handleProfile}
            // onClick={login}
            /> {/*Icono del perfil, al hacer click muestra el mismo */}
            {/*Si el perfil está abierto muestra la información */}
            {isProfileOpen && (
                <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/">Perfil</Link> {/*Link que lleva al perfil del usuario */}
                    <div className="mt-2 cursor-pointer" onClick={handleLogout}>{isLoading ? "Lodding out" : "loggout"}</div> {/*Se muestra en ventana modal del perfil */}
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
