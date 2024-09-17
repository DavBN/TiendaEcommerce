"use client"; //Componente para el uso del lado del cliente
import { usePathname, useRouter, useSearchParams } from "next/navigation"; //Importación de next navigation para uso de los parámetros creados en otros componentes

//Función para el paginado de la página y mostra botones de acuerdo al producto mostrado, son booleanos para que se muestre o no dependiendo la página
const Pagination = ({
    currentPage,
    hasPrev,
    hasNext,
}: {
    currentPage: number;
    hasPrev: boolean;
    hasNext: boolean;
}) => {

    //Uso del componente del filtro para busqueda de parámetros
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();


    //Crea la nueva URL de la página sin actualizar, agrega la page=1,2,3 dependiendo de la acción del botón
    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="mt-12 flex justify-between w-full">
            <button className="rounded-md bg-tienda text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-300"
                disabled={!hasPrev} //Si esta presente deshabilitar el botón
                onClick={() => createPageUrl(currentPage - 1)} //Muestra en la url page=1 
            >
                Previa
            </button>
            <button className="rounded-md bg-tienda text-white p-2 text-sm w-24 cursor-pointer disabled:cursor-not-allowed disabled:bg-pink-300"
                disabled={!hasNext}//Si esta presente deshabilitar el botón
                onClick={() => createPageUrl(currentPage + 1)} //Muestra en la url page=1
            >
                Siguiente

            </button>
        </div>
    )
}

export default Pagination; 