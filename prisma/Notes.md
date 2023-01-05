# Prisma

To run with Docker it requires a replica set.

## Create with the Dockerfile

```sh
docker build . -t mongodb-repl
docker run -e MONGO_INITDB_ROOT_USERNAME=root \
  -e MONGO_INITDB_ROOT_PASSWORD=prisma \
  -e MONGO_REPLICA_HOST=localhost \
  -e MONGO_REPLICA_PORT=27018 \
  -p "27018:27018" mongodb-repl
```

Then, ensure your `.env` has this connection string

```sh
DATABASE_URL=mongodb://localhost:27018/t3-app
```

This should allow `prisma studio` to work as well.

Reference

- <https://github.com/prisma/prisma/tree/main/docker>
- <https://www.prisma.io/docs/concepts/database-connectors/mongodb#error-transactions-are-not-supported-by-this-deployment>
