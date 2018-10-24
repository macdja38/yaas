FROM node:11

RUN mkdir /code
WORKDIR /code

ADD package.json .
ADD package-lock.json .

RUN npm install

ADD . .

CMD npm run start
