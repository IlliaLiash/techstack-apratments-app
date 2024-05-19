# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json files and install dependencies for backend
COPY packages/backend/package*.json ./backend/
RUN cd backend && npm install

# Copy package.json files and install dependencies for frontend
COPY packages/frontend/package*.json ./frontend/
RUN cd frontend && npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy backend and frontend source code
COPY packages/backend/. /app/backend
COPY packages/frontend/. /app/frontend

# Build the frontend using Vite
RUN cd frontend && npm run build

# Move the frontend build output to the backend's public directory
RUN mkdir -p /app/backend/public && cp -r /app/frontend/dist/* /app/backend/public/

# Expose the port the app runs on
EXPOSE 3001

# Set the working directory for the backend
WORKDIR /app/backend

# Run the backend server
CMD ["npm", "run", "start"]