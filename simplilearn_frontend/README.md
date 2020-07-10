![Build Status](https://ci.techjini.com/buildStatus/icon?job=intugine)

# Getting Started

## Local Development with Docker

Ensure docker and docker-compose are installed, then run

```bash
docker-compose -f dev/compose.yml up
```

## Local Development without Docker

Currently, there aren't any real complexities in running this project so doing so from your local environment is very simple - and can result in a more responsive development experience.

From the root of the web-ams directory:

```bash
yarn install
yarn setup
```

Ensure .env.local values are set. See dev/compose.yml for the values to set.

```bash
yarn start
```

# Contribution Guidelines

- Read [authoring-components](./docs/authoring-components.md)
- Write unit tests. Not too many, but enough.
- Ensure minimum code coverage of 80%
- TODO
