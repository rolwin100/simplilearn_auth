FROM node:10.16

WORKDIR /app

COPY package.json yarn.lock /app/

COPY . /app/

RUN rm .env

RUN yarn install --no-progress --silent

RUN yarn global add pm2

ENV NODE_ENV production

EXPOSE 80

CMD pm2 start index.js --name api-server && pm2 logs