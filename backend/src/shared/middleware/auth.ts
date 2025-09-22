import type { Context, Next } from "hono";
import jwt from "jsonwebtoken";
import { getCookie } from "hono/cookie";

export interface JwtPayload {
  id: string | number;
  role?: string;
  iat?: number;
  exp?: number;
}

// Shared Hono bindings so we can strongly type c.set/c.get("user")
export type AppBindings = {
  Variables: {
    user: JwtPayload;
  };
};

const JWT_SECRET = process.env.JWT_SECRET!;

export const requireAuth = async (c: Context<AppBindings>, next: Next) => {
  // Prefer cookie-based token
  let token = getCookie(c, "access_token");
  // Fallback to Authorization header
  if (!token) {
    const authHeader = c.req.header("Authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      token = authHeader.split(" ")[1];
    }
  }
  if (!token) return c.json({ error: "No token" }, 401);

  try {
    const payload = jwt.verify(token, JWT_SECRET) as JwtPayload;
    c.set("user", payload);
    await next();
  } catch {
    return c.json({ error: "Invalid or expired token" }, 401);
  }
};

export const requireRole = (...roles: string[]) => {
  return async (c: Context<AppBindings>, next: Next) => {
    const user = c.get("user") as JwtPayload | undefined;
    if (!user) return c.json({ error: "Unauthenticated" }, 401);
    if (!user.role || !roles.includes(user.role)) {
      return c.json({ error: "Forbidden" }, 403);
    }
    await next();
  };
};
