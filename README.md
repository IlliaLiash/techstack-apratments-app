# Apartments app

### Tech stack

Backend server app powered by:
- [Nest.js](https://github.com/nestjs/nest)
- [Mongoose](https://hevodata.com/learn/nestjs-mongoose/)
- [Swagger](https://swagger.io/)

Frontend app powered by:
- [React](https://ru.legacy.reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Final Form](https://final-form.org/react)

App will be available on http://localhost:3000

API Documentation will be available on http://localhost:3000/api

### Running the app

To run the app, run the following command in the root directory:

```sh
$ docker-compose up
```

### Seed data

To seed data, run the following command in the `packages/backend` directory:

```sh
$ npx nestjs-command seed:apartments
```