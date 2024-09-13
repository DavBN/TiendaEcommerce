# Etapa de construcción
FROM node:18-alpine AS build

WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package*.json ./
RUN npm install

# Copia el código fuente
COPY . .

# Construye el proyecto Next.js
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia la configuración de Nginx personalizada
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos generados por la construcción de Next.js
COPY --from=build /app/.next /usr/share/nginx/html

# Expone el puerto 80 para que Nginx pueda servir la aplicación
EXPOSE 80

# Comando por defecto para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]





