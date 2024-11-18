

# Stage 1: Build the backend
FROM node:20.12.0-alpine3.19 AS backend-build

WORKDIR /usr/src/app/backend

COPY backend/package.json backend/package-lock.json ./
RUN npm install

COPY backend ./



CMD ["npm", "run", "start"]