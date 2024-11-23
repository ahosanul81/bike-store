import { Request, Response } from "express";
import { productService } from "./product.service";
import { ProductValidationSchema } from "./product.zod.validation";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const zodParseData: any = ProductValidationSchema.parse(product);

    const result = await productService.addproductIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (error: any) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error,
    });
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const { searchTerm } = req.query;
    console.log(category, searchTerm);
    const result = await productService.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);

    const result = await productService.getProductByIdFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product by Id",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to get product",
      error: error.message,
    });
  }
};
const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { updatedInfo } = req.body;
    console.log(productId);

    const result = await productService.updateProductByIdIntoDB(
      productId,
      updatedInfo
    );

    res.status(200).json({
      success: true,
      message: "Product  updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Product failed to update",
      error: error.message,
    });
  }
};
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productService.deleteProductByIdFromDB(productId);

    res.status(200).json({
      success: true,
      message: "Product  deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Product failed to delete",
      error: error.message,
    });
  }
};

export {
  addProduct,
  getAllProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
