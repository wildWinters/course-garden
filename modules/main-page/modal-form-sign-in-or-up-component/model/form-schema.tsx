import z from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "minimum 6 symbols"),
});

export type FormData = z.infer<typeof formSchema>;
