FROM node:10.16

WORKDIR /app

COPY package.json yarn.lock /app/ 

RUN yarn install --no-progress --silent

COPY . /app/

CMD ["yarn", "start"]