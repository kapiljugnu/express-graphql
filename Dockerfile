FROM node:lts-bullseye-slim
WORKDIR /app
ADD . .
RUN npm install
CMD npm start