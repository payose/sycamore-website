FROM node:latest as build-stage

ARG VUE_APP_API_URL
ARG VUE_APP_DASHBOARD_URL

WORKDIR /app

COPY package*.json ./

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN yarn install \
	--prefer-offline \
	--frozen-lockfile \
	--non-interactive \
	--production=false \
	--ignore-engines


COPY ./ .

RUN yarn build

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
