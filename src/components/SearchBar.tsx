"use client" //Uso del componente del lado del cliente

import Image from "next/image"; {/*Importación de next image para la implementación de imagenes */}
import { useRouter } from "next/navigation"; {/*Importación de next navigation para la navegación por medio de routers */}

{/*Componente barra de busqueda */}
const SearchBar = () => {
    const router = useRouter();
    {/*Metodo para el evento del formulario y envío de información en la barra de busqueda*/ }
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (name) {
            router.push(`/list?name=${name}`)
        }
        {/*Muestra el texto puesto en la barra de busqueda, lo muestra por GET en la URL principal*/ }
    }
    return (
        <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={handleSearch}>
            <input type="text" name="name" placeholder="Search" className="flex-1 bg-transparent outline-none" />
            <button className="cursor-pointer">
                <Image src="/buscar.png" alt="Buscar" width={16} height={16} /> {/*Icono de la lupa en la barra de busqueda */}
            </button>
        </form>
    )
}

export default SearchBar
