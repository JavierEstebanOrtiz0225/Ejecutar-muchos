FROM node:latest

WORKDIR /opp/app

COPY . .

EXPOSE 1000:1000

RUN npm install
RUN npm i -g pm2
CMD [ "pm2" ,"start","server.js"]