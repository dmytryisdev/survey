FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build -- --output-path=/app/dist

# FROM nginx:alpine

# COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

CMD ["sh", "-c", "npm run build && npm run preview"]