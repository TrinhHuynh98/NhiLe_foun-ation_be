FROM node:16-alpine3.11

ENV PORT=4000

WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app/
RUN npm install

# Copy source
COPY . /usr/src/app

EXPOSE $PORT
CMD [ "npm", "start" ]
