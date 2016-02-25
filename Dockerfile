FROM node

MAINTAINER MisterDevo, mister.devo@gmail.com

WORKDIR /opt
COPY . /opt
RUN cd /opt && npm install
RUN npm run coverage && bower install

EXPOSE 3000
CMD ["node", "bin/www"]
