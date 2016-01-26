FROM node

MAINTAINER MisterDevo, mister.devo@gmail.com

WORKDIR /opt/TFTFT
ADD . opt/TFTFT

RUN cd /opt/TFTFT && npm install

EXPOSE 3000
CMD ["npm start"]
