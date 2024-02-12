# Initial Setup

## Docker and Database

We are using docker for faster database setup. We are using MySQL as the main database.

1. Be sure to have docker installed
2. Copy `.env.template` file and rename it into `.env`

```
$ cp .env.template .env
```

3. Run docker

```
$ docker-compose up -d
```
