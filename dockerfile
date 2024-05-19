FROM node:20-alpine

WORKDIR /app

COPY packages/backend/package*.json ./backend/
RUN cd backend && npm install

COPY packages/frontend/package*.json ./frontend/
RUN cd frontend && npm install

RUN npm install -g typescript

COPY packages/backend/. /app/backend
COPY packages/frontend/. /app/frontend

RUN cd frontend && npm run build

RUN mkdir -p /app/backend/public && cp -r /app/frontend/dist/* /app/backend/public/

EXPOSE 3000

WORKDIR /app/backend

CMD ["npm", "run", "start"]