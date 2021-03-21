# base image
FROM node:10

# install and cache app dependencies
COPY . .
RUN npm install

EXPOSE 8080

# start app
CMD ["npm", "run", "serve"]