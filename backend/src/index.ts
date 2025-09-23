import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { PrismaClient } from "./generated/prisma/index.js";

const app = new Hono();
const prisma = new PrismaClient();

app.get("/hello", (c) => c.json("hello world"));

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 4000,
});

console.log("server is run on port http://localhost:4000");


