FROM node:16.13.0-alpine AS build-stage

WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build:development

FROM node:16.13.0-alpine AS production-stage

WORKDIR /app
COPY --from=build-stage /app/node_modules ./node_modules
COPY --from=build-stage /app/dist ./dist

CMD ["node", "dist/index.js"]
