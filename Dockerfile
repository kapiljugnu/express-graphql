FROM node:lts-bullseye-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD . .
CMD npm start
