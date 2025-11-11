import { jwtDecode } from "jwt-decode";

export interface DecodedUser {
  id: string;
  role: string;
  iat?: number;
  exp?: number;
}

export function getCurrentUser(): DecodedUser | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    return jwtDecode<DecodedUser>(token);
  } catch (err) {
    console.error("Помилка декодування токена:", err);
    return null;
  }
}

export function isTokenExpired(): boolean {
  const user = getCurrentUser();
  if (!user || !user.exp) return true;
  return Date.now() >= user.exp * 1000;
}

export function getUserRole(): string | null {
  const user = getCurrentUser();
  return user?.role || null;
}

export function getUserId(): string | null {
  const user = getCurrentUser();
  return user?.id || null;
}
