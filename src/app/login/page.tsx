"use client"; //Componente para el uso del lado del cliente

import { useWixClient } from "@/hooks/useWixClient";
import { useState } from "react";

//Modos de autenticación
enum MODE {
    LOGIN = "LOGIN", // modo de inicio de sesión
    REGISTRER = "REGISTRER", // modo para el registro nuevo usuario
    RESET_PASSWORD = "RESET_PASSWORD", // modo para reestablecer la contraseña
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION" //modo para verificar correo
}

const LoginPage = () => {

    //Controla el modo actual de inicio de sesión
    const [mode, setMode] = useState(MODE.LOGIN)
    //Almacena el nombre del usuario
    const [username, setUsername] = useState("")
    //Almacena el correo
    const [email, setEmail] = useState("")
    //Almacena la contraseña
    const [password, setPassword] = useState("")
    //Almacena el código de verificación
    const [emailCode, setEmailCode] = useState("")
    //inidica el proceso de operación
    const [isLoading, setIsLoading] = useState(false)
    //Almacena mensajes de error
    const [error, setError] = useState("")
    //Almacena mensajes generales
    const [message, setMessage] = useState("")

    //Determina el título del formulario basado en el valor del estado mode
    const formTitle =
        mode === MODE.LOGIN
            ? "Log in" : mode === MODE.REGISTRER ? "Registrar" : mode === MODE.RESET_PASSWORD ? "Resetear contraseña" : "Verificar email";

    //Determina el título del formulario basado en el valor del estado mode, botón
    const buttonTitle =
        mode === MODE.LOGIN
            ? "Login" : mode === MODE.REGISTRER ? "Registrar" : mode === MODE.RESET_PASSWORD ? "Resetear" : "Verificar";

    //Uso del cliente de wix
    const wixClient = useWixClient();

    return (
        //Div padre con clase y estilos de adaptación a pantalla
        <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
            <form className="flex flex-col gap-8">
                <h1 className="text-2xl font-semibold text-center">{formTitle}</h1>
                {/*Si mode es igual a MODE.REGISTRER, se muestra un campo de entrada para el nombre de usuario y sino no se muestra */}
                {mode === MODE.REGISTRER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Nombre usuario</label>
                        <input type="text" name="username" placeholder="David" className="ring-2 ring-gray-300 rounded-md p-4" />
                    </div>
                ) : null}

                {/*Si mode es diferente a MODE.EMAIL_VERIFICATION, sale el campo para el correo. Si mode es igual a MODE.EMAIL_VERIFICATION sale el campo de código*/}
                {mode !== MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Correo electrónico</label>
                        <input type="email" name="email" placeholder="david@gmail.com" className="ring-2 ring-gray-300 rounded-md p-4" />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Código de verificación</label>
                        <input type="text" name="emailCode" placeholder="Código" className="ring-2 ring-gray-300 rounded-md p-4" />
                    </div>
                )}

                {/*Si mode es igual a MODE.LOGIN o MODE.REGISTRER, se muestra un campo de entrada para la contraseña y sino no se muestra */}
                {mode === MODE.LOGIN || mode === MODE.REGISTRER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Contraseña</label>
                        <input type="password" name="password" placeholder="Ingresa tu contraseña" className="ring-2 ring-gray-300 rounded-md p-4" />
                    </div>
                ) : null}

                {mode === MODE.LOGIN && <div className="text-center text-sm underline cursor-pointer" onClick={() => setMode(MODE.RESET_PASSWORD)}>¿Olvidó su contraseña?</div>}

                {/*Botón para hacer acción dependiendo del mood que esté establecido por la función primaria */}
                <button className="bg-tienda text-white p-2 rounded-md disabled:bg-pink-300 disabled:cursor-not-allowed" disabled={isLoading}>
                    {isLoading ? "loading" : buttonTitle} {/*cambia el contenido dinámicamente dependiendo de si isLoading está activo o no */}
                </button>
                {error && <div className="text-red-600">{error}</div>}

                {/*Si el usuario no esta registrado y presiona el botón lo mandará al formulario de registro */}
                {mode === MODE.LOGIN && (
                    <div className="text-center text-sm underline cursor-pointer" onClick={() => setMode(MODE.REGISTRER)}>
                        ¿No tienes una cuenta? Presiona aquí
                    </div>
                )}

                {/*Si el usuario esta en el formulario de registro y ya tiene una cuenta, por el botón lo mandará al login */}
                {mode === MODE.REGISTRER && (
                    <div className="text-center text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
                        ¿Tienes una cuenta? Presiona aquí
                    </div>
                )}

                {/*Si el usuario esta en el apartado de reset password y tiene cuenta lo mandará al login inicial */}
                {mode === MODE.RESET_PASSWORD && (
                    <div className="text-center text-sm underline cursor-pointer" onClick={() => setMode(MODE.LOGIN)}>
                        Volver al login
                    </div>
                )}

                {/*Mensaje de todo correcto dependiendo la acción realizada */}
                {message && <div className="text-green-600">{message}</div>}
            </form>
        </div>
    )
}

export default LoginPage