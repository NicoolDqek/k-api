# Imagen base con Node 22
FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Exponer el puerto del backend
EXPOSE 5000

# Comando para iniciar el servidor
CMD ["npm", "start"]
