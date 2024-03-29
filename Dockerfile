FROM node:16.13.2-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:1.20.2-alpine as production-stage
RUN apk add --no-cache tzdata
ENV TZ=America/Argentina/Buenos_Aires
RUN cp /usr/share/zoneinfo/$TZ /etc/localtime
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf