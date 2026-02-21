# Docker Install

Requirements:

- Docker
- Docker Compose

```docker
version: "3.1"

services:
  OneDesk_postgres:
    container_name: OneDesk_postgres
    image: postgres:latest
    restart: always
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: OneDesk
      POSTGRES_PASSWORD: 1234
      POSTGRES_DB: OneDesk

  OneDesk:
    container_name: OneDesk
    image: pepperlabs/OneDesk:latest
    ports:
      - 3000:3000
      - 5003:5003
    restart: always
    depends_on:
      - OneDesk_postgres
    environment:
      DB_USERNAME: "OneDesk"
      DB_PASSWORD: "1234"
      DB_HOST: "OneDesk_postgres"
      SECRET: 'OneDesk4life'

volumes:
 pgdata:
```

After you have created the docker-compose.yml file, run the following command:

```bash
docker-compose up -d
```

Then you can access the application at http://your-server-ip:3000

The default login credentials for the admin account are:

```
admin@admin.com
1234
```
