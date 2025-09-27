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
