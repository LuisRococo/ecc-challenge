# Electric Color Code Backend

## Initial Setup

We are using docker for faster database setup. We are using MySQL as the main database.

1. Be sure to have docker installed and running
2. Download the dependencies

```
$ yarn install
```

3. Copy `.env.template` file and rename it into `.env`

```
$ cp .env.template .env
```

4. Run docker

```
$ docker-compose -p ecc-challenge-db up -d
```

5. Create tables and seed them.

These commands can fail with the next error: `Error: P1017: Server has closed the connection.`. That usually happens the first time running docker. Wait a bit until MySQL is totally active and then try to run the command again. You can check the docker logs to see when MySQL is ready.

```
$ yarn prisma migrate dev
```

```
$ yarn prisma db seed
```

6. Start development server

```
$ yarn dev
```

## Testing

We use Jest for testing. Tests are located on the "\_\_tests\_\_" directory.

To run tests you can use the next command:

```
yarn test
```
