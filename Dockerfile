# Usa una imagen base de Node.js
FROM node:18-alpine

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y las dependencias primero
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente al contenedor
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]








