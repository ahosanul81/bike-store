import { z } from "zod";

export const OrderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  product: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
});
