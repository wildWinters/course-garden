import type { Context, Next } from "hono";
import jwt from "jsonwebtoken";

export const authMiddleware = (secret: string, requiredRole?: string) => {
  return async (c: Context, next: Next) => {
    const authHeader = c.req.header("Authorization");
    if (!authHeader) return c.json({ message: "No token provided" }, 401);

    const token = authHeader.split(" ")[1];
    if (!token) return c.json({ message: "Invalid token" }, 401);

    try {
      const decoded = jwt.verify(token, secret) as { id: number; role: string };

      c.set("user", decoded);

      if (requiredRole && decoded.role !== requiredRole) {
        return c.json({ message: "Forbidden" }, 403);
      }

      return next();
    } catch (err) {
      return c.json({ message: "Token invalid or expired" }, 401);
    }
  };
};
