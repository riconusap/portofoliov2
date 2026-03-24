# Stage 1: Build Vue App
FROM node:23.10.0-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --include=optional \
	&& npm install --no-save @rollup/rollup-linux-x64-musl
COPY . .
RUN npm run build

# Stage 2: Serve dengan Nginx
FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]