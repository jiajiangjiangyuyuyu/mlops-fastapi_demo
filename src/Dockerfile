FROM node:18-alpine

WORKID /react-app

COPY public/ /react-app/public
COPY src/ /react-app1/src
COPY package.json/ /react-app/package.json

RUN npm install

CMD ["npm", "start"]