ARG NODE_VERSION=18.15.0-alpine3.17
ARG NGINX_VERSION=1.23.3-alpine

FROM node:${NODE_VERSION} AS builder

ARG VITE_API_URL
ARG VITE_SENTRY_DSN
ARG VITE_SENTRY_TRACES_SAMPLE_RATE

WORKDIR /deps

COPY . .

RUN npm ci --production --ignore-scripts && npm run build

FROM nginx:${NGINX_VERSION}

COPY docker/frontend/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder --chown=nginx:nginx /deps/dist /usr/share/nginx/html

EXPOSE 80
