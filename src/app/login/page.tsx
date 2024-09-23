"use client"; //Componente para el uso del lado del cliente

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

//Modos de autenticación
enum MODE {
    LOGIN = "LOGIN", // modo de inicio de sesión
    REGISTRER = "REGISTRER", // modo para el registro nuevo usuario
    RESET_PASSWORD = "RESET_PASSWORD", // modo para reestablecer la contraseña
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION" //modo para verificar correo
}

const LoginPage = () => {
    const wixClient = useWixClient();
    const router = useRouter();

    const isLoggedIn = wixClient.auth.loggedIn();
    console.log(isLoggedIn);

    if (isLoggedIn) {
        router.push("/");
    }


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
    const [message, setMessage] = useState("");
    //URL que identifica la ubicación del recurso solicitado en el servidor
    const pathName = usePathname();


    //Determina el título del formulario basado en el valor del estado mode
    const formTitle =
        mode === MODE.LOGIN
            ? "Loggeo" : mode === MODE.REGISTRER ? "Registrar" : mode === MODE.RESET_PASSWORD ? "Resetear contraseña" : "Verificar email";

    //Determina el título del formulario basado en el valor del estado mode, botón
    const buttonTitle =
        mode === MODE.LOGIN
            ? "Login" : mode === MODE.REGISTRER ? "Registrar" : mode === MODE.RESET_PASSWORD ? "Resetear" : "Verificar";

    //Uso del cliente de wix


    //Función asyncrona
    const handleSumit = async (e: React.FormEvent) => {
        e.preventDefault(); //Evita el comportamiento por defatult del formulario.
        setIsLoading(true) //Establece los estados de carga.
        setError("") //Establece los estados de carga.


        //Try catch para envoler los casos y en caso de error no válidar, solo mostrar mensaje de error si un caso falla 
        try {
            let response; //Variable sin inicializar para uso de la función asyncrona

            switch (mode) {
                case MODE.LOGIN:
                    response = await wixClient.auth.login({ //Si mode es MODE.LOGIN, se llama a wixClient.auth.login() con el email y password del usuario
                        email,
                        password,
                    });
                    break;
                case MODE.REGISTRER:
                    response = await wixClient.auth.register({ //Si mode es MODE.REGISTER, se llama a wixClient.auth.register() para registrar un nuevo usuario, enviando también un perfil que contiene un nickname
                        email,
                        password,
                        profile: { nickname: username },
                    });
                    break;
                case MODE.RESET_PASSWORD:
                    response = await wixClient.auth.sendPasswordResetEmail( //Envia un correo de restablecimiento de contraseña al usuario cuando se encuentra en el modo de inicio de sesión MODE.LOGIN
                        email,
                        window.location.href
                    );
                    setMessage("Contraseña enviada a tu email. Porfavor revisa tu bandeja de entrada")
                    break;
                case MODE.EMAIL_VERIFICATION:
                    response = await wixClient.auth.processVerification({ //Proceso de verificación de la cuenta por medio del código enviado al usuario a su correo registrado
                        verificationCode: emailCode,
                    });
                    break;
                default:
                    break;
            }
            console.log(response);

            //Estado de la operación, error, exito o pendiente.
            switch (response?.loginState) {
                case LoginState.SUCCESS: //maneja el estado de inicio de sesión de un usuario. Si el inicio de sesión es exitoso
                    setMessage("Login exitoso, serás redirigido en un momento!.") //mensaje al usuario de exito
                    const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken!); //Obtiene los tokens de validación
                    console.log(tokens);

                    Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
                        expires: 2
                    })
                    wixClient.auth.setTokens(tokens);
                    router.push("/");
                    break;
                //Validación de los campos para alertas al usuario
                case LoginState.FAILURE:
                    if (response.errorCode === "invalidEmail" || response.errorCode === "invalidPassword") { //Correo o contraseña invalidas
                        setError("Correo inválido o contraseña inválida")
                    }
                    else if (response.errorCode === "emailAlreadyExists") { //Validación del correo eléctronico
                        setError("Este correo ya existe")
                    }
                    else if (response.errorCode === "resetPassword") { //Validación para el reset de contraseñas
                        setError("Tu necesitas cambiar tu contraseña")
                    } else {
                        setError("Algo salió mal, intentalo de nuevo") //En caso de que todo salga mal o algo sal mal se muetra el error
                    }
                //Verificación de email al momento de crear cuenta
                case LoginState.EMAIL_VERIFICATION_REQUIRED:
                    setMode(MODE.EMAIL_VERIFICATION);
                case LoginState.OWNER_APPROVAL_REQUIRED:
                    setMessage("Tu cuenta esta pendiente de aprobación");
                default:
                    break;
            }

        } catch (error) {
            setError("Algo salió mal, intenta de nuevo!"); //Error

        } finally {
            setIsLoading(false)
        }

    }

    return (
        //Div padre con clase y estilos de adaptación a pantalla
        <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center dark:grayscale dark:text-black">
            <form className="flex flex-col gap-8" onSubmit={handleSumit}>
                <h1 className="text-2xl font-semibold text-center">{formTitle}</h1>
                {/*Si mode es igual a MODE.REGISTRER, se muestra un campo de entrada para el nombre de usuario y sino no se muestra */}
                {mode === MODE.REGISTRER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Nombre usuario</label>
                        <input type="text" name="username" placeholder="David" className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                ) : null}

                {/*Si mode es diferente a MODE.EMAIL_VERIFICATION, sale el campo para el correo. Si mode es igual a MODE.EMAIL_VERIFICATION sale el campo de código*/}
                {mode !== MODE.EMAIL_VERIFICATION ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Correo electrónico</label>
                        <input type="email" name="email" placeholder="david@gmail.com" className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Código de verificación</label>
                        <input type="text" name="emailCode" placeholder="Código" className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={e => setEmailCode(e.target.value)}
                        />
                    </div>
                )}

                {/*Si mode es igual a MODE.LOGIN o MODE.REGISTRER, se muestra un campo de entrada para la contraseña y sino no se muestra */}
                {mode === MODE.LOGIN || mode === MODE.REGISTRER ? (
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-700 text-center">Contraseña</label>
                        <input type="password" name="password" placeholder="Ingresa tu contraseña" className="ring-2 ring-gray-300 rounded-md p-4"
                            onChange={e => setPassword(e.target.value)}
                        />
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