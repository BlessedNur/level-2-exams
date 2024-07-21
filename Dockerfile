FROM node:13-alpine

RUN mkdir -p /home/react-app


COPY . /home/react-app


WORKDIR /home/react-app


CMD ["npm","run","dev"]
