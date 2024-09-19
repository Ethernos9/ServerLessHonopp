// import { Hono } from 'hono';
// import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
// import { swaggerUI } from '@hono/swagger-ui';
// import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from '@prisma/extension-accelerate';
// import { Context } from 'hono';

// // Initialize the OpenAPI Hono app
// const app = new OpenAPIHono();

// // Schemas for Swagger Documentation
// const UserSchema = z.object({
//   id: z.number().openapi({ example: 1 }),
//   name: z.string().openapi({ example: 'John Doe' }),
//   email: z.string().email().openapi({ example: 'johndoe@example.com' }),
//   password: z.string().openapi({ example: 'password123' }),
// }).openapi('User');
// const ParamSchema = z.object({
//   id: z.number().openapi({ example: 1 }),
// }).openapi('User');



// // Define a route with OpenAPI spec
// // app.post('/users', {
// //   request: {
// //     body: UserSchema.omit({ id: true }), // Exclude `id` from the request body
// //   },
// //   responses: {
// //     200: {
// //       content: {
// //         'application/json': {
// //           schema: z.object({
// //             msg: z.string(),
// //             user: UserSchema,
// //           }),
// //         },
// //       },
// //       description: 'User created successfully',
// //     },
// //   },
// // }, async (c: Context) => {
// //   const prisma = new PrismaClient().$extends(withAccelerate());
// //   const { name, email, password } = await c.req.json<{ name: string; email: string; password: string }>();

// //   try {
// //     const user = await prisma.user.create({
// //       data: { name, email, password },
// //     });
// //     return c.json({
// //       msg: 'User created successfully',
// //       user,
// //     });
// //   } catch (error) {
// //     return c.json({ msg: 'Unable to create user' }, 500);
// //   }
// // });

//   const route = createRoute({
//     method: 'get',
//     path: '/users/{id}',
//     request: {
//       params: ParamSchema,
//     },
//     responses: {
//       200: {
//         content: {
//           'application/json': {
//             schema: UserSchema,
//           },
//         },
//         description: 'Retrieve the user',
//       },
//     },
//   })

//     app.openapi(route, (c:any) => {
//     const { id } = c.req.valid('param')
//     return c.json({
//       id,
//       age: 20,
//       name: 'Ultra-man',
//     })
//   })

// // app.get('/users', {
// //   responses: {
// //     200: {
// //       content: {
// //         'application/json': {
// //           schema: z.array(UserSchema),
// //         },
// //       },
// //       description: 'Get all users',
// //     },
// //   },
// // }, async (c: Context) => {
// //   const prisma = new PrismaClient().$extends(withAccelerate());
// //   const users = await prisma.user.findMany();
// //   return c.json(users);
// // });

// // app.get('/users/:id', {
// //   request: {
// //     params: z.object({
// //       id: z.string().min(1).openapi({
// //         param: { name: 'id', in: 'path' },
// //         example: '1',
// //       }),
// //     }),
// //   },
// //   responses: {
// //     200: {
// //       content: {
// //         'application/json': {
// //           schema: UserSchema,
// //         },
// //       },
// //       description: 'Get user by ID',
// //     },
// //   },
// // }, async (c: Context) => {
// //   const prisma = new PrismaClient().$extends(withAccelerate());
// //   const id = c.req.param('id');
// //   const user = await prisma.user.findUnique({
// //     where: { id: Number(id) },
// //   });
// //   if (!user) return c.text('User not found', 404);
// //   return c.json(user);
// // });

// // app.delete('/users/:id', {
// //   request: {
// //     params: z.object({
// //       id: z.string().min(1).openapi({
// //         param: { name: 'id', in: 'path' },
// //         example: '1',
// //       }),
// //     }),
// //   },
// //   responses: {
// //     200: {
// //       description: 'User deleted',
// //     },
// //   },
// // }, async (c: Context) => {
// //   const prisma = new PrismaClient().$extends(withAccelerate());
// //   const id = c.req.param('id');
// //   await prisma.user.delete({
// //     where: { id: Number(id) },
// //   });
// //   return c.text('User deleted');
// // });

// // Swagger UI and OpenAPI documentation setup
// app.get('/ui', swaggerUI({ url: '/doc' }));
// app.doc('/doc', {
//   openapi: '3.0.0',
//   info: {
//     version: '1.0.0',
//     title: 'My API',
//   },
// });

// export default app;
