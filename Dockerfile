FROM node:20-alpine as build

WORKDIR /smith_chris_final_site
COPY . /smith_chris_final_site

RUN npm install  --silent
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /smith_chris_final_site/dist /var/www/html/
EXPOSE 5575
CMD ["nginx","-g","daemon off;"]