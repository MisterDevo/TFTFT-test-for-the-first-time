FROM node

MAINTAINER MisterDevo, mister.devo@gmail.com

WORKDIR /opt
ADD . opt

RUN cd /opt && npm install

EXPOSE 3000
CMD ["npm start"]
