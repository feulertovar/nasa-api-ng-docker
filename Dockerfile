### STAGE 1: Build ###
FROM node:16.14-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /app/dist/nasa-api-ng /usr/share/nginx/html
EXPOSE 80
