import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image"; {/*Importaciones de componentes de next */ }
import Link from "next/link"; {/*Importaciones de componentes de next */ }

{/*Constante de para listar las categorías */ }
const CategoryList = async () => {

    const wixClient = await wixClientServer()
    const cats = await wixClient.collections.queryCollections().find()

    return (
        <div className="px-4 overflow-x-scroll  hide-scrollbar">{/*Contenido del carrusel con las categorías con función de scroll */}
            {/*Contenido del carrusel con las categorías */}
            <div className="flex gap-4 md:gap-8">
                {(cats).items.map((item) => (
                    <Link href={`/list?cat=${item.slug}`} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6" key={item._id}>{/*Contenido del carrusel con las categorías */}
                        <div className="relative bg-slate-100 w-full h-96">{/*Contenido del carrusel con las categorías */}
                            <Image src={item.media?.mainMedia?.image?.url || "/cat.webp"} alt="" fill sizes="20vw" className="object-cover" />{/*Contenido del carrusel con las categorías */}
                        </div>
                        <h1 className="mt-8 font-light text-cl tracking-wide">{item.name}</h1>{/*Contenido del carrusel con las categorías */}

                    </Link>
                ))}


            </div>
        </div>
    )
}

export default CategoryList