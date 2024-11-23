import express from "express";
import {
  addProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProductById,
} from "./product.controller";
const productRouter = express.Router();

productRouter.post("/addProduct", addProduct);
productRouter.get("/", getAllProduct);
productRouter.get("/:productId", getProductById);
productRouter.put("/:productId", updateProductById);
productRouter.delete("/:productId", deleteProductById);

export { productRouter };
