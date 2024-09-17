"use client"; //Componente para el uso del lado del cliente

import { useState } from "react";

//Modos de autenticación
enum MODE {
    LOGIN="LOGIN", // modo de inicio de sesión
    REGISTRER="REGISTRER", // modo para el registro nuevo usuario
    RESET_PASSWORD = "RESET_PASSWORD", // modo para reestablecer la contraseña
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION" //modo para verificar correo
}

const LoginPage = () => {
     
    //Controla el modo actual de inicio de sesión
    const [mode,setMode] = useState(MODE.LOGIN)
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
    ? "Login" : mode === MODE.REGISTRER ? "Registrar" : mode === MODE.RESET_PASSWORD ? "Resetar contraseña" : "Verificar email";

    return (
        <div>LoginPage</div>
    )
}

export default LoginPage