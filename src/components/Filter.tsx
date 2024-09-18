"use client"; //Uso del componente del lado del cliente

import { usePathname, useRouter, useSearchParams } from "next/navigation"; //Importaciones necesarias para el uso de nextnavegation


{/*maneja la actualización dinámica de parámetros de búsqueda en la URL basada en la interacción del usuario con los filtros.*/ }
const Filter = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div className="mt-12 flex justify-between"> {/*Div padre que contiene los demás */}
            <div className="flex gap-6 flex-wrap"> {/*Tamaño del div usando flex */}
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
                    onChange={handleFilterChange}
                >{/*Select para selección de elementos */}
                    <option>Tipo</option> {/*Despliega las opciones */}
                    <option value="physical">Físico</option>
                    <option value="digital">Digital</option>
                </select>
                <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-500" onChange={handleFilterChange} />{/*campos de texto para ingresar valor */}
                <input type="text" name="max" placeholder="max price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-500" onChange={handleFilterChange} />{/*campos de texto para ingresar valor */}

                <select name="cat" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200" onChange={handleFilterChange}>{/*Select para selección de elementos */}
                    <option>Categorías</option>{/*Despliega las opciones */}
                    <option value="">Nuevos</option>
                    <option value="">Popular</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200" onChange={handleFilterChange}>{/*Select para selección de elementos */}
                    <option>Todos los filtros</option>
                </select>
            </div>
            <div className="">
                <select name="sort" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400" onChange={handleFilterChange}>{/*Select para selección de elementos */}
                    <option>Ordenar por</option>{/*Despliega las opciones */}
                    <option value="asc price">Precio (low to high)</option> {/*Filtración del productos */}
                    <option value="desc price">Precio (high to low)</option>{/*Filtración del productos */}
                    <option value="asc lastUpdated">Nuevas noticias</option>{/*Filtración del productos */}
                    <option value="desc lastUpdated">Viejas noticias</option>{/*Filtración del productos */}
                </select>
            </div>
        </div>
    )
}

export default Filter