# from base image node
FROM node:16-alpine3.11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy oter files as well
COPY dist/api.bundle.js .

#expose the port
EXPOSE 4000

# command to run when intantiate an image
CMD ["node","api.bundle.js"]