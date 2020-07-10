# Node boilerplate

API service responsible to store.
Exposes and Admin dashboard to manage data and a simple HTML page to allow users to view/download/share their images.

# Technologies:

- Node.js & Express.js with pug
- MongoDB & Mongoose

# Architecture

Read about the architecture [here](./architecture.md)

# Getting Started

## Local Development with Docker

Ensure docker and docker-compose are installed, then run:

```bash
cp .env.example .env
# Edit credentials in .env
docker-compose up
```

## Local Development without Docker

```bash
cp .env.example .env
# Edit credentials in .env
yarn install
yarn start
```

## Deployment with PM2

- `pm2 start`

# Coding standards

- Prettier
- Eslint
