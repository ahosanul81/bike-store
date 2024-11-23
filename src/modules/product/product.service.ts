import { TProduct } from "./product.interface";
import { productModel } from "./product.model";

const addproductIntoDB = async (product: TProduct) => {
  console.log(product);

  try {
    const result = await productModel.create(product);
    return result;
  } catch (error) {
    throw error;
  }
};
const getAllProductFromDB = async () => {
  try {
    const result = await productModel.find();
    return result;
  } catch (error) {
    throw error;
  }
};
const getProductByIdFromDB = async (id: string) => {
  try {
    const result = await productModel.find({ _id: id });
    return result.length > 0 ? result[0] : {};
  } catch (error) {
    throw error;
  }
};
const updateProductByIdIntoDB = async (id: string, obj: object) => {
  try {
    const result = await productModel.findByIdAndUpdate(
      { _id: id },
      { $set: obj },
      { upsert: false, new: true }
    );
    return result;
  } catch (error) {
    throw error;
  }
};
const deleteProductByIdFromDB = async (id: string) => {
  try {
    const result = await productModel.findOneAndDelete({ _id: id });

    return result;
  } catch (error) {
    throw error;
  }
};

export const productService = {
  addproductIntoDB,
  getAllProductFromDB,
  getProductByIdFromDB,
  updateProductByIdIntoDB,
  deleteProductByIdFromDB,
};
