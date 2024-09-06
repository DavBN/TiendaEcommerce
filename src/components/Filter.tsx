{/*Constante del componente filter */ }
const Filter = () => {
    return (
        <div className="mt-12 flex justify-between"> {/*Div padre que contiene los demás */}
            <div className="flex gap-6 flex-wrap"> {/*Tamaño del div usando flex */}
                <select name="type" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">{/*Select para selección de elementos */}
                    <option>Tipo</option> {/*Despliega las opciones */}
                    <option value="indumentaria">Indumentaria</option>
                    <option value="bicicletas">Bicicletas</option>
                </select>
                <input type="text" name="min" placeholder="precio minimo" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-500" />{/*campos de texto para ingresar valor */}
                <input type="text" name="max" placeholder="precio maximo" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-500" />{/*campos de texto para ingresar valor */}
                <select name="size" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">{/*Select para selección de elementos */}
                    <option>Tamaño</option>{/*Despliega las opciones */}
                    <option value="indumentaria">Indumentaria</option>
                </select>
                <select name="color" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">{/*Select para selección de elementos */}
                    <option>Color</option>{/*Despliega las opciones */}
                    <option value="indumentaria">Test</option>
                </select>
                <select name="estilos" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">{/*Select para selección de elementos */}
                    <option>Categorías</option>{/*Despliega las opciones */}
                    <option value="indumentaria">Nuevos</option>
                    <option value="indumentaria">Popular</option>
                </select>
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200">{/*Select para selección de elementos */}
                    <option>Todos los filtros</option>
                </select>
            </div>
            <div className="">
                <select name="" id="" className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400">{/*Select para selección de elementos */}
                    <option>Ordenar por</option>{/*Despliega las opciones */}
                    <option value="">Precio (menor a mayor)</option> {/*Filtración del productos */}
                    <option value="">Precio (mayor a menor)</option>{/*Filtración del productos */}
                    <option value="">Nuevas</option>{/*Filtración del productos */}
                    <option value="">Viejas</option>{/*Filtración del productos */}
                </select>
            </div>
        </div>
    )
}

export default Filter