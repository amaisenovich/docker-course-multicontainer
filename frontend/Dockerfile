FROM node:alpine AS builder
WORKDIR /app
COPY ./README.md ./
COPY ./package*.json ./
RUN npm install
COPY ./public ./public/
COPY ./src ./src/
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
