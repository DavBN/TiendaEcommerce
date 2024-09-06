import Image from "next/image"; {/*Importación de next image para el uso de imagenes */ }

const ListPage = () => {
    {/*Página principal para el listado */ }
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative"> {/*Div padre con nos tamaños de ajuste para pantallas */}
            {/*Campaña de publicidad */}
            <div className="bg-red-100 px-4 flex justify-between h-64"> {/*Ancho de la clase dentro del contenedor, con color de fondo */}
                <div className="w-2/3 flex flex-col items-center justify-center gap-8"> {/*Ancho de la clase dentro del contenedor */}
                    {/*Tamaños de la clase, estilos y color de letra, como el internileado con leading */}
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-600">30% De descuento en
                        <br/> Productos Seleccionados</h1> {/*Salto de línea para mejor visual */}
                        <button className="rounded-3xl bg-tienda text-white w-max py-3 px-5 text-sm"> {/*Tamaños del botón y estilos del mismo */}
                             ¡Comprar ahora!
                        </button>
                </div>
                <div className="relative w-1/3"> {/*Ancho de la clase dentro del contenedor */}
                    <Image src="/ciclista.png" alt="imagen del banner" fill className="object-contain" /> {/*Imagen lado derecho del banner */}

                </div>
            </div>

        </div>
    )
}

export default ListPage