ARG NODE_VERSION=18.15.0-alpine3.17
ARG NGINX_VERSION=1.23.3-alpine

FROM node:${NODE_VERSION} AS builder

# TODO: remove line below, only for compatibility with old code
ARG VITE_API_PATH
ARG VITE_API_URL

WORKDIR /deps

COPY . .

RUN npm ci --production && npm run build

FROM nginx:${NGINX_VERSION}

COPY --from=builder --chown=nginx:nginx /deps/dist /usr/share/nginx/html

EXPOSE 80
