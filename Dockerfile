FROM node:8-slim

WORKDIR /subtraction

COPY package.json ./

RUN npm install

COPY . .

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "start"]