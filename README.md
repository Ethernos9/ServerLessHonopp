# Hono App

![Hono App Architecture](path/to/your/image.png)

## Overview

Hono App is a simple backend application built on a serverless architecture using Cloudflare Workers. It allows you to create, fetch, and delete users, leveraging PostgreSQL as the database and Prisma as the ORM. Due to Cloudflare Workers' environment, the app uses Prisma's connection pooling feature.

## Features

- Serverless architecture with Cloudflare Workers
- PostgreSQL database with Prisma ORM
- User creation, fetching, and deletion
- Prisma connection pooling for efficient database management

## Installation

Follow these steps to get the Hono App running on your local environment:

1. **Create a new Hono app:**
   npm create hono@latest my-app
2.Navigate to the project directory and install dependencies:
cd my-app
npm install
3. Install Prisma: npm install --save-dev prisma
4. Initialize Prisma:npx prisma init
5. Create a basic schema:
6. Create migrations:npx prisma migrate dev --name init
7. Set up Prisma Accelerate:  Sign up for Prisma Accelerate.
Enable Accelerate, generate an API key, and update your .env file:
8.Add Accelerate as a dependency:npm install @prisma/extension-accelerate
9.Generate the Prisma client:npx prisma generate --no-engine

## Clone this Repo
--> https://github.com/Ethernos9/ServerLessHonopp.git
npm intall
npm run dev


   
