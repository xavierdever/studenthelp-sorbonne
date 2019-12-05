# Spring Setup


## Docker

### Docker build

Run `docker build -t build-tag -f file-path .`

### Docker run

Run `docker run -d -p 2368:2368 build-tag`

## Docker compose

### Docker compose build

Run `docker-compose up -d --build`

### Docker compose build prod

Run `docker-compose -f docker-compose-prod.yml up -d --build`

### Docker compose stop

Run `docker-compose stop`