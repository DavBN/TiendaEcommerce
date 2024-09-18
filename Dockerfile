# Usa una imagen base de Node.js
FROM node:18-alpine

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY ./src ./src


# Compila la aplicación desde el directorio correcto
RUN npm run build 

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start", "--prefix", "./app"]







