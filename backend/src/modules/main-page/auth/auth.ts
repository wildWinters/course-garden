import { Hono } from "hono";
import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma.js";
import { requireAuth, requireRole, type AppBindings } from "../../../shared/middleware/auth.js";
import { setCookie, deleteCookie, getCookie } from "hono/cookie";
import { signAccessToken, signRefreshToken, verifyRefreshToken } from "../../../shared/auth/tokens.js";

export const JWT_SECRET = process.env.JWT_SECRET!;

export const auth = new Hono<AppBindings>();

auth.post("/register", async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password)
      return c.json({ error: "Email та пароль обов'язкові" }, 400);
    const emailRe = /.+@.+\..+/;
    if (!emailRe.test(email)) return c.json({ error: "Невалідний email" }, 400);
    if (String(password).length < 6)
      return c.json({ error: "Пароль має містити щонайменше 6 символів" }, 400);

    const exist = await prisma.user.findUnique({ where: { email } });
    if (exist) return c.json({ error: "Користувач вже існує" }, 409);

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashed, role: "user" },
      select: { id: true, email: true, role: true },
    });

    // Issue cookies
    const access = signAccessToken({ id: user.id, role: user.role });
    const refresh = signRefreshToken({ id: user.id, role: user.role });
    const secure = process.env.NODE_ENV === "production";
    setCookie(c, "access_token", access, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15, // 15m
    });
    setCookie(c, "refresh_token", refresh, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7d
    });

    return c.json({ message: "Користувача створено", user }, 201);
  } catch (e) {
    return c.json({ error: "Помилка сервера" }, 500);
  }
});

auth.post("/login", async (c) => {
  try {
    const { email, password } = await c.req.json();
    if (!email || !password)
      return c.json({ error: "Email та пароль обов'язкові" }, 400);

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return c.json({ error: "Користувача не знайдено" }, 400);
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return c.json({ error: "Невірний пароль" }, 400);
    const access = signAccessToken({ id: user.id, role: user.role });
    const refresh = signRefreshToken({ id: user.id, role: user.role });
    const secure = process.env.NODE_ENV === "production";
    setCookie(c, "access_token", access, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });
    setCookie(c, "refresh_token", refresh, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return c.json({ message: "Успішний вхід" });
  } catch (e) {
    return c.json({ error: "Помилка сервера" }, 500);
  }
});

auth.get("/me", requireAuth, async (c) => {
  const payload = c.get("user") as { id: string | number; role?: string };
  const user = await prisma.user.findUnique({
    where: { id: typeof payload.id === "string" ? Number(payload.id) : payload.id },
    select: { id: true, email: true, role: true, createdAt: true, updatedAt: true },
  });
  if (!user) return c.json({ error: "Користувача не знайдено" }, 404);
  return c.json({ user });
});

auth.get("/admin", requireAuth, requireRole("admin"), async (c) => {
  return c.json({ message: "Лише для адміністраторів" });
});

// Refresh access token using refresh cookie
auth.post("/refresh", async (c) => {
  try {
    const token = getCookie(c, "refresh_token");
    if (!token) return c.json({ error: "No refresh token" }, 401);
    const payload = verifyRefreshToken(token);
    const access = signAccessToken({ id: payload.id, role: payload.role });
    const secure = process.env.NODE_ENV === "production";
    setCookie(c, "access_token", access, {
      httpOnly: true,
      secure,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });
    return c.json({ message: "refreshed" });
  } catch {
    return c.json({ error: "Invalid refresh token" }, 401);
  }
});

// Logout: clear cookies
auth.post("/logout", async (c) => {
  const secure = process.env.NODE_ENV === "production";
  deleteCookie(c, "access_token", { path: "/", secure, sameSite: "lax" });
  deleteCookie(c, "refresh_token", { path: "/", secure, sameSite: "lax" });
  return c.json({ message: "Logged out" });
});
