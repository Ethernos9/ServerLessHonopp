
import { Hono } from 'hono';
import {PrismaClient} from "@prisma/client/edge"
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

import type { Context } from 'hono';

const app = new Hono();

app.get("/",(c)=>{
  return c.text("Hello, World!");
})
app.post('/users', async (c: Context) => {
  const url = c.env.DATABASE_URL;
  const prisma = new PrismaClient({
    datasourceUrl: url
}).$extends(withAccelerate())
  const { name, email ,password} = await c.req.json<{ name: string; email: string;password:string }>();
  console.log(name,email,password)
  try {
    const user = await prisma.user.create({
      data: { name, email,password},
    });
    return c.json({
      "msg":"User created successfully",
      "user":user
    });
  } catch (error) {
    console.log(error);
    return c.json({
      "msg":"Unable to create user",
      
    });
  }
 
});

// Get all users
app.get('/users', async (c: Context) => {
const url = c.env.DATABASE_URL;
  const prisma = new PrismaClient({   
    datasourceUrl: url

}).$extends(withAccelerate())
  const users = await prisma.user.findMany();
  return c.json(users);
});

// Get a user by ID
app.get('/users/:id', async (c: Context) => {
  const url = c.env.DATABASE_URL;
  const prisma = new PrismaClient({
    datasourceUrl: url
}).$extends(withAccelerate())
  const id = c.req.param('id');
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
  });
  if (!user) return c.text('User not found', 404);
  return c.json(user);
});


// // Delete a user by ID
app.delete('/users/:id', async (c: Context) => {
  const url = c.env.DATABASE_URL;
  const prisma = new PrismaClient({
    datasourceUrl: url
}).$extends(withAccelerate())
  const id = c.req.param('id');
  await prisma.user.delete({
    where: { id: Number(id) },
  });
  return c.text('User deleted');
});

export default app;





















