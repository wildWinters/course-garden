import { create } from "zustand";

interface AuthState {
  token: string | null;
  role: "admin" | "user" | null;
  userId: string | null;

  login: (token: string, role: "admin" | "user", userId: string) => void;
  logout: () => void;

  isAdmin: () => boolean;
  isLoggedIn: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  role: null,
  userId: null,

  login: (token, role, userId) => {
    set({ token, role, userId });

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("userId", userId);
  },

  logout: () => {
    set({ token: null, role: null, userId: null });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
  },

  isAdmin: () => get().role === "admin",
  isLoggedIn: () => !!get().token,
}));
