import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: {
      values: ["Mountain", "Road", "Hybrid", "Electric"],
      message: "Choose a category within Mountain, Road, Hybrid and Electric",
    },
    required: true,
  },
  description: { type: String },
  quantity: { type: Number },
  inStock: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

export const productModel = model<TProduct>("Products", productSchema);
