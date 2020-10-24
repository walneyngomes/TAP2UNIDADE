FROM node:lastest AS builder
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_URL_BACKEND=mongodb://localhost:27017/bookflix
RUN npm run build

FROM nginx AS server
COPY --from=builder build /usr/share/nginx/html