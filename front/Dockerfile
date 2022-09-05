##
# 参考 : https://jp.vuejs.org/v2/cookbook/dockerize-vuejs-app.html
##

# ビルド環境
FROM node:lts-alpine as build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# 本番環境
FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# https://tottoto-toto.hatenablog.com/
CMD ["nginx", "-g", "daemon off;"]
