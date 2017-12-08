# React-Redux-Rails skelton on Docker

## Requirement
- Docker

## Installation
```
$ git clone git@github.com:tk1to/rails-react-skelton.git
$ cd rails-react-skelton
```

## Setup
```
$ docker-compose build
$ docker-compose up -d
$ docker-compose down
$ docker-compose run --rm rails rails db:create
$ docker-compose run --rm rails rails db:migrate
$ docker-compose up -d
```

## Access
[http://0.0.0.0:8080](http://0.0.0.0:8080)

## Add gem
```
$ echo 'gem "{gemname}"' >> ./docker/rails/Gemfile
# or edit ./docker/rails/Gemfile

$ docker-compose build
```

## Add node module
```
# edit ./docker/node/Dockerfile
$ docker-compose build
```
