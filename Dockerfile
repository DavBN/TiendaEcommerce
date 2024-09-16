# Establecer la imagen base
FROM node:18-alpine AS builder

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Compilar la aplicación Next.js para producción
RUN npm run build

# Instalar 'serve' para servir la aplicación en modo producción
RUN npm install -g serve

# Exponer el puerto que utilizará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación Next.js
CMD ["npm", "run", "start"]






