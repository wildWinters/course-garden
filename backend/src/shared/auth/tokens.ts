import jwt, { type Secret } from "jsonwebtoken";

export const JWT_ACCESS_SECRET = (process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET!) as Secret;
export const JWT_REFRESH_SECRET = (process.env.JWT_REFRESH_SECRET || (process.env.JWT_SECRET! + "_refresh")) as Secret;

export type TokenPayload = {
  id: number | string;
  role?: string;
};

export function signAccessToken(payload: TokenPayload, expiresInSeconds: number = 60 * 15) {
  return jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: expiresInSeconds });
}

export function signRefreshToken(payload: TokenPayload, expiresInSeconds: number = 60 * 60 * 24 * 7) {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: expiresInSeconds });
}

export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_ACCESS_SECRET) as TokenPayload;
}

export function verifyRefreshToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_REFRESH_SECRET) as TokenPayload;
}
