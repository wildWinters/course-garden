import { kyInstance } from "@/shared/lib/ky-instance";

export async function login(email: string, password: string): Promise<void> {
  try {
    const res = await kyInstance.post("auth/login", {
      json: { email, password },
    });

    const data = await res.json<{ message?: string; error?: string }>();
    if (!res.ok) {
      const errText = data.error || data.message || "Помилка авторизації";
      throw new Error(errText);
    }
    return;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Login error:", err.message);
      throw err;
    }
    console.error("Unknown login error:", err);
    throw new Error("Невідома помилка логіну");
  }
}
