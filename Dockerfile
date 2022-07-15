FROM node:16-alpine3.11

WORKDIR /NhiLe_foun-ation_be

RUN npm install

COPY . /NhiLe_foun-ation_be

EXPOSE 3000

CMD ["npm", "start"]
