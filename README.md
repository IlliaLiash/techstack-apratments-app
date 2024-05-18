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

API Documentation will be available on http://localhost:3000/api

### Running the app

With Docker:
```sh
$ docker-compose up
```

Without Docker:

Ensure you have MongoDB installed and running on your machine.

```sh
$ cd packages/backend
$ npm install
$ npm run start:dev
```

```sh
$ cd packages/frontend
$ npm install
$ npm start
```