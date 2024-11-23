import { z } from "zod";

export const ProductValidationSchema = z.object({
  name: z.string().max(20, { message: "Keep your name within 20 charecter" }),
  brand: z.string(),
  price: z.number(),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
    message: "Choose a category within Mountain, Road, Hybrid and Electric",
  }),
  description: z.string().max(250, { message: "Maximum 250 charecters " }),
  quantity: z.number().min(0, { message: "please add '0' or more than '0'" }),
  inStock: z.boolean(),
});
