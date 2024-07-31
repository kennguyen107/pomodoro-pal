FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json to /app directory in the container
COPY package.json .

# Install dependencies in /app directory in the container
RUN npm install

# Copy all other files to /app directory in the container
COPY . .

EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "dev"]