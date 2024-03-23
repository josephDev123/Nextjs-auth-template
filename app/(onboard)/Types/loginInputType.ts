import { z } from "zod";

export const loginInputType = z.object({
  email: z.string().email().min(3),
  password: z.string().min(6),
});
