"use client"; //Componente de uso del lado del cliente
import React, { useState, useEffect } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    // Obtener el tema actual del almacenamiento local o establecer el tema por defecto del sistema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Si no hay tema guardado, usar el tema por defecto del sistema
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    // Actualizar la clase en el HTML
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Guardar el tema en localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {theme === "dark" ? "🌞 Claro" : "🌙 Oscuro"}
    </button>
  );
};

export default ToggleTheme;

