import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { signupInput, signinInput } from "@100xdevs/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
      userId: number;
    }
}>();

userRouter.use("/complete-profile", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  if(!authHeader.startsWith("Bearer ")) {
    c.status(403);
    return c.json({ message: "Authorization header is missing or malformed"})
  }

  const token = authHeader.split(" ")[1]
  try {
      const payload = await verify(token, c.env.JWT_SECRET);
      if (payload && typeof payload.id === "number") {
          
          c.set("userId", payload.id);
          await next();
      } else {
          c.status(403);
          return c.json({
              message: "invalid token payload"
          })
      }
  } catch(e) {
      c.status(403);
      return c.json({
          message: "invalid or expired token"
      })
  }
});

// userRouter.get('/userdata', async (c) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate())

//   const userData = prisma.user.findFirst({
//     where: 
//   })
// })

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const alreadyExist = await prisma.user.findFirst({
        where: {
          username: body.username
        }
      })
      if(alreadyExist) {
        c.status(401);
        return c.json({ message: "user already exist"})
      }
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name
        }
      })
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.text(jwt)
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })
  
  userRouter.post('/complete-profile', async (c) => {
    const userId = c.get("userId");
    const { bio } = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    await prisma.user.update({
      where: {id: Number(userId)},
      data: { bio}
    });

    return c.json({ message: "profile completed successfully"});
  })


  userRouter.post('/signin', async (c) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password,
        }
      })
      if (!user) {
        c.status(403);
        return c.json({
          message: "Incorrect creds"
        })
      }
      const jwt = await sign({
        id: user.id
      }, c.env.JWT_SECRET);
  
      return c.text(jwt)
    } catch(e) {
      console.log(e);
      c.status(411);
      return c.text('Invalid')
    }
  })