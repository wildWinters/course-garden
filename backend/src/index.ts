import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import "dotenv/config";
import { auth } from "./modules/main-page/auth/auth.js";
import type { AppBindings } from "./shared/middleware/auth.js";

const app = new Hono<AppBindings>();

// CORS for frontend
const origin = process.env.CORS_ORIGIN || process.env.NEXT_PUBLIC_APP_ORIGIN || "http://localhost:3000";
app.use("*", cors({
  origin,
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
  credentials: true,
}));

// Global error handler
app.onError((err, c) => {
  console.error("Unhandled error:", err);
  return c.json({ error: "Внутрішня помилка сервера" }, 500);
});

// Routes
app.route("/auth", auth);

serve(
  {
    fetch: app.fetch,
    port: 4000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
