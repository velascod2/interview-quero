FROM node:14
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY /src/package*.json ./

# Bundle app source
COPY /src/ /usr/src/app

# Create app directory
WORKDIR /usr/src/app

RUN npm install express mysql
CMD [ "node", "server.js" ]

# Ports
EXPOSE 3000