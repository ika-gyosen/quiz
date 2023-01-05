FROM node:16.13.0-alpine

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build:development

CMD ["node", "dist/index.js"]
