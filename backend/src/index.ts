import { serve } from "@hono/node-server";
import { Hono } from "hono";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import fs from "fs/promises";
import { authMiddleware } from "./middlewares/auth.js";

const app = new Hono();
const JWT_SECRET = "your_jwt_secret_key";
const USERS_FILE = "./db.json";

const getUsers = async () => {
  const data = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(data);
};

const saveUsers = async (users: any[]) => {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
};

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/register", async (c) => {
  const { email, password, role } = await c.req.json();
  const users = await getUsers();
  const existing = users.find((u: any) => u.email === email);
  if (existing) return c.json({ message: "User already exists" }, 400);

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    email,
    password: hashedPassword,
    role: role || "USER",
  };
  users.push(newUser);
  await saveUsers(users);

  return c.json({
    message: "User registered successfully",
    user: { id: newUser.id, email: newUser.email, role: newUser.role },
  });
});

app.post("/login", async (c) => {
  const { email, password } = await c.req.json();
  const users = await getUsers();
  const user = users.find((u) => u.email === email);
  if (!user) return c.json({ message: "User not found" }, 404);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return c.json({ message: "Invalid password" }, 401);

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return c.json({ token });
});

app.get("/user", authMiddleware(JWT_SECRET), (c) => {
  return c.json({ message: "Welcome, user!" });
});

app.get("/admin", authMiddleware(JWT_SECRET, "ADMIN"), (c) => {
  return c.json({ message: "Welcome, admin!" });
});

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
