FROM node:12.18.0-alpine3.11

ENV NODE_VERSION 12.14.0
ENV NVM_DIR /home/webapp/.nvm

RUN apk add --no-cache git chromium

WORKDIR /opt

RUN git clone https://github.com/rmaftei/react-express-typescript-docker.git webapp && \
  cd webapp && mkdir build && \ 
  cd frontend && yarn install && yarn build && \
  cd .. && yarn install 

WORKDIR /opt/webapp

CMD yarn start $PORT
