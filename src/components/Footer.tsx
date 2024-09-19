import Image from "next/image"; {/*Importación de next image para el uso de imagenes */}
import Link from "next/link";import ToggleTheme from "./ToggleTheme";
 {/*Importación de next link para uso de links */ }

{/*Componente del footer, pié de página */ }
const Footer = () => {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-200 text-sm mt-24"> {/*Aisgnación de tamaños y color del footer */}
            {/*Arriba */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/*Izquierda */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">OSC</div>
                    </Link>
                    <p>Pereira - Risaralda, POS 2675793, Colombia</p> {/*Información */}
                    <span className="font-semibold">ogallego181@gmail.com</span> {/*Información */}
                    <span className="font-semibold">+57 31961685502</span> {/*Información */}
                    <div className="flex gap-6">
                        <Image src="/facebook.webp" alt="Imagenes redes sociales" width={20} height={20} /> {/*Iconos de las redes sociales */}
                        <Image src="/instagram.webp" alt="Imagenes redes sociales" width={20} height={20} />{/*Iconos de las redes sociales */}
                        <Image src="/youtube.webp" alt="Imagenes redes sociales" width={20} height={20} />{/*Iconos de las redes sociales */}
                        <Image src="/whatsapp.webp" alt="Imagenes redes sociales" width={20} height={20} />{/*Iconos de las redes sociales */}
                        <Image src="/x.webp" alt="Imagenes redes sociales" width={20} height={20} />{/*Iconos de las redes sociales */}
                    </div>
                </div>
                {/*Centro */}
                <div className="hidden lg:flex justify-between w-1/2"> {/*Div padre */}
                    <div className="flex flex-col justify-between">  {/*Contenido del footer y sección */}
                        <h1 className="font-medium text-lg">COMPAÑIA</h1> {/*Contenido del footer y sección */}
                        <div className="flex flex-col gap-6"> {/*Contenido del footer y sección */}
                            <Link href="">Nosotros</Link>{/*Contenido del footer y sección */}
                            <Link href="">Empresa</Link>{/*Contenido del footer y sección */}
                            <Link href="">Afiliados</Link>{/*Contenido del footer y sección */}
                            <Link href="">Blog</Link>{/*Contenido del footer y sección */}
                            <Link href="">Contacto</Link>{/*Contenido del footer y sección */}
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">{/*Contenido del footer y sección */}
                        <h1 className="font-medium text-lg">TIENDA</h1>{/*Contenido del footer y sección */}
                        <div className="flex flex-col gap-6">{/*Contenido del footer y sección */}
                            <Link href="">Productos</Link>{/*Contenido del footer y sección */}
                            <Link href="">Razón social</Link>{/*Contenido del footer y sección */}
                            <Link href="">Afiliados</Link>{/*Contenido del footer y sección */}
                            <Link href="">Blog</Link>{/*Contenido del footer y sección */}
                            <Link href="">Contacto</Link>{/*Contenido del footer y sección */}
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">{/*Contenido del footer y sección */}
                        <h1 className="font-medium text-lg">AYUDA</h1>{/*Contenido del footer y sección */}
                        <div className="flex flex-col gap-6">{/*Contenido del footer y sección */}
                            <Link href="">Contactanos</Link>{/*Contenido del footer y sección */}
                            <Link href="">Línea de atención</Link>{/*Contenido del footer y sección */}
                            <Link href="">Afiliados</Link>{/*Contenido del footer y sección */}
                            <Link href="">Blog</Link>{/*Contenido del footer y sección */}
                            <Link href="">Contacto</Link>{/*Contenido del footer y sección */}
                        </div>
                    </div>
                </div>
                {/*Derecha */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8"> {/*Contenido para recibir información */}
                    <h1 className="font-medium text-lg">Suscribirse</h1>{/*Contenido para recibir información */}
                    <p>
                        ¡Recibe información de primera mano, promociones y descuentos de nuestros productos!.{/*Contenido para recibir información */}
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Dirección email"
                            className="p-4 w-3/4"
                        />
                        <button className="w-1/4 bg-tienda text-white">Unirse</button> {/*Botón de unirse */}
                    </div>
                    <span className="font-semibold">Pagos seguros</span>
                    <div className="flex justify-between">
                        <Image src="/discover.png" alt="Imagenes pagos" width={40} height={20} /> {/*Iconos de los métodos de pago */}
                        <Image src="/skrill.webp" alt="Imagenes pagos" width={40} height={20} />{/*Iconos de los métodos de pago */}
                        <Image src="/paypal.png" alt="Imagenes pagos" width={40} height={20} />{/*Iconos de los métodos de pago */}
                        <Image src="/mastercard.webp" alt="Imagenes pagos" width={40} height={20} />{/*Iconos de los métodos de pago */}
                        <Image src="/visa.webp" alt="Imagenes pagos" width={40} height={20} />{/*Iconos de los métodos de pago */}
                    </div>
                </div>
            </div>
            {/*Botón */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16"> {/*Tamaños de adaptación */}
                <div className="">@ 2024 Tienda Virtual</div> {/*Contenido del footer parte final */}
                <div className="flex flex-col gap-8 md:flex-row"> {/*Contenido del footer parte final */}
                    <div className=""> {/*Contenido del footer parte final */}
                        <span className="text-gray-500 mr-4">Lenguaje</span>{/*Contenido del footer parte final */}
                        <span className="font-medium">Colombia | Español</span>{/*Contenido del footer parte final */}

                    </div>
                    <div className="">{/*Contenido del footer parte final */}
                        <span className="text-gray-500 mr-4">Moneda</span>{/*Contenido del footer parte final */}
                        <span className="font-medium">$ COP</span>{/*Contenido del footer parte final */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
