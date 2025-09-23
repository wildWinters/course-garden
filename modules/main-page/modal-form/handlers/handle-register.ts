import { kyInstance } from "@/shared/lib/ky-instance";


export async function register(email: string, password: string): Promise<Record<string, unknown>> {
  try {
    const res = await kyInstance.post("auth/register", {
      json: { email, password },
    });

    const data = await res.json<{ user?: unknown; message?: string; error?: string }>();

    if (!res.ok) {
      const errText = data.error || data.message || "Помилка реєстрації";
      throw new Error(errText);
    }

    return data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Register error:", err.message);
      throw err;
    }
    console.error("Unknown register error:", err);
    throw new Error("Невідома помилка реєстрації");
  }
}