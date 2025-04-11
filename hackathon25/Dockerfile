# Use the node image from official Docker Hub
FROM node:23.9.0 as build-stage
# set the working directory
WORKDIR /hackathon25

# Copy package.json and package-lock.json for frontend dependencies
COPY package*.json ./
# Install the project dependencies
RUN npm install
# Copy the rest of the project files to the container
COPY . .

# Build the Vue.js application for production
RUN npm run build  # This will generate the dist folder

# Stage 2: Set up Express Server (Backend)
FROM node:23.9.0 as backend-stage

# Set working directory for backend (ensure it's /hackathon25 in the container)
WORKDIR /hackathon25

# Copy package.json and package-lock.json again (for backend dependencies)
COPY package*.json ./
RUN npm install

# Copy backend files (including server.js) from the local 'server' directory to the container
COPY ./server .
# Expose the port for the backend (Express server)
EXPOSE 3000

# Start the Express server
# CMD ["node", "server.js"]

# Stage 3: Production with Nginx (for serving the frontend)
FROM nginx:stable-alpine as production-stage
# Copy the build application from the previous stage to the Nginx container
COPY --from=build-stage /hackathon25/dist /usr/share/nginx/html/
# Copy the nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Expose the port 80
EXPOSE 80
# Start Nginx to serve the application
CMD ["nginx", "-g", "daemon off;"]
