# Stage 1: Build the frontend
FROM node:20.12.0-alpine3.19 AS frontend-build

WORKDIR /usr/src/app/frontend

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend ./
RUN npm run build

# Stage 2: Build the backend
FROM node:20.12.0-alpine3.19 AS backend-build

WORKDIR /usr/src/app/backend

COPY backend/package.json backend/package-lock.json ./
RUN npm install

COPY backend ./


# Stage 3: Final stage
FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

# Copy built frontend and backend
COPY --from=frontend-build /usr/src/app/frontend/dist ./frontend
COPY --from=backend-build /usr/src/app/backend ./backend

# Install production dependencies for backend
WORKDIR /usr/src/app/backend
RUN npm install --only=production

CMD ["npm", "run", "start"]