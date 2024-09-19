import Link from "next/link"; {/*Importaciones de next para uso de links */ }
import Menu from "./Menu"; {/*Importacion del componente menú */ }
import Image from "next/image"; {/*Importaciones de next */ }
import SearchBar from "./SearchBar"; {/*Importaciones de la barra de busqueda */ }
import NavIcons from "./NavIcons"; {/*Importación del componente naviicons */ }
import ToggleTheme from "./ToggleTheme";



{/*El menú de navegación */ }
const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative"> {/*Div padre */}
            {/*Menú de celular con logo*/}
            <div className="h-full flex items-center justify-between md:hidden"> {/*Tamaños y ajustes de pantalla para celular */}
                <Link href="/">
                    <div className="text-2xl tracking-wide">Tienda Virtual</div> {/*Titulo a la derecha en móvil o pc */}
                </Link>
                <Menu />

            </div>
            {/*Pantallas más grandes*/}
            <div className="hidden md:flex items-center justify-between gap-8 h-full"> {/*Tamaños y ajustes de pantalla para celular */}
                {/*Izquierda*/}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12"> {/*Dependiendo del tamaño varia la acomodación de los items */}
                    <Link href="/" className="flex items-center gap-3">{/*Dependiendo del tamaño varia la acomodación de los items */}
                        <Image src="/logo.png" alt="Logo" width={24} height={24} />{/*Dependiendo del tamaño varia la acomodación de los items */}
                        <div className="text-2xl tracking-wide">Tienda Virtual</div>{/*Dependiendo del tamaño varia la acomodación de los items */}
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">Principal</Link> {/*Navbar pricipal en la parte superior */}
                        <Link href="/">Tienda</Link>{/*Navbar pricipal en la parte superior */}
                        <Link href="/">Ofertas</Link>{/*Navbar pricipal en la parte superior */}
                        <Link href="/">Nosotros</Link>{/*Navbar pricipal en la parte superior */}
                        <Link href="/">Contacto</Link>{/*Navbar pricipal en la parte superior */}
                    </div>
                </div>
                {/*Derecha*/}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
}

export default Navbar