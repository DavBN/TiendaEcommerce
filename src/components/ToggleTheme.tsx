"use client"; //componente de uso del lado del cliente

import { useState } from 'react'; //Importación del hook

//constante del componente
const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); //Se usa el hook de usestate para definir la varuavle isdarkmode

  //Función que se ejecuta al dar click en el botón para cambio de tema entre claro y oscuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="flex justify-center items-center h-screen"> {/*Div padre que contiene el botón y la "cuerda en el botón" */}
      {/* Contenedor que simula el cable colgante */}
      <div className="relative flex flex-col items-center">
        {/* Línea que simula el cable */}
        <div className="w-1 bg-gray-400 h-5"></div>

        {/* Botón que simula el interruptor */}
        <button
          onClick={toggleTheme}
          className={`flex items-center justify-center w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full shadow-lg transition-transform duration-700 ease-in-out ${isDarkMode ? 'translate-y-2' : '-translate-y-2'
            }`}
        >
          <span className="text-2xl"> 
            {isDarkMode ? '🌙' : '☀️'}
          </span>
        </button>

        {/* Texto que describe el tema */}
        <span className="text-3xl">{isDarkMode ? '' : ''}</span> {/*En caso de querer texto que diga el color actual se puede colocar en los strings */}
      </div>
    </div>
  );
};

export default ToggleTheme;
