FROM node:12

//instsall npm ou check al doc

RUN mkdir /correctionApp
WORKDIR /correctionApp
COPY package.json /correctionApp/package.json
COPY test.js /correctionApp/test.js
RUN mkdir to_test.js

RUN npm install