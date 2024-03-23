import { z } from "zod";

export const registerType = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(1),
});

const registerRequired = registerType.required({
  name: true,
  email: true,
  password: true,
});
