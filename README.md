# WordPress Headless Boilerplate with Next.js

## 📌 Description

This is a boilerplate for headless WordPress using Next.js. The project enables a quick setup for a new website.

## 🚀 Technologies

- **Next.js** – SSR, ISR, SSG for better performance
- **WordPress REST API / GraphQL (WPGraphQL)** – backend communication
- **Docker** – containerized environment

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YourRepo/wordpress-headless-boilerplate.git
cd wordpress-headless-boilerplate
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory with:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000/wp-json
DB_NAME=wordpress
DB_ROOT_PASSWORD=yourpassword
PORT=8080
IP=0.0.0.0
```

### 3. Start the Project with Docker
Ensure you have Docker installed, then run:
```bash
docker-compose up -d
```
This will start the following services:
- **Next.js frontend** on `http://localhost:3000`
- **WordPress backend** on `http://localhost:8080`
- **phpMyAdmin** on `http://localhost:8080`
- **MySQL database**

### 4. Install WordPress Plugins
- Install and activate the WPGraphQL plugin (optional WP REST API)
- Configure allowed CORS in `.htaccess` or via a plugin

### 5. Run Next.js
Go to nextjs-wordpress-headless folder and run:
```bash
npm run start
```

## 📂 Project Structure

```
📦 wordpress-headless-boilerplate
 ┣ 📂 config                    # Config files
 ┣ 📂 headless-nextjs           # WordPress theme
 ┣ 📂 nextjs-wordpress-headless # Our Frontend and Backend in Next.js
 ┃ ┣ 📂 public                  # Static assets
 ┃ ┣ 📂 src                     # Source code
 ┣ 📂 wp-app                    # WordPress core files
 ┗ 📂 wp-data                   # Used to store and restore database dumps
```
