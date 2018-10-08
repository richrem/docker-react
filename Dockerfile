# create product build
FROM node:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN yarn install --upgrade
COPY . .
RUN yarn build

# run with nginx
FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
