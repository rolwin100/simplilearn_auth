FROM nginx:1.15-alpine

ENV NGINX_ROOT=/usr/share/nginx/html

# Install bash as it's required to create env.js.
RUN apk add --no-cache bash
COPY env.sh /env.sh

# Add custom nginx configuration.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Move webpack build to nginx public directory.
RUN rm -rf $NGINX_ROOT/*
COPY ./build/ $NGINX_ROOT/

CMD ["/bin/bash", "-c", "/env.sh ${NGINX_ROOT}/env.js && nginx -g 'daemon off;'"]
