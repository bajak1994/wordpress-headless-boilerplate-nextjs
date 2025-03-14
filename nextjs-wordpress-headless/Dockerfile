# Use the official Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Set the port on which our application will run
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
