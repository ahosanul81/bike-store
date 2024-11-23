import { productModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const placeAnOrderIntoDB = async (orderInfo: TOrder) => {
  const { product } = orderInfo;

  try {
    if (orderInfo) {
      const { quantity }: any = await productModel
        .findOne({ _id: product })
        .select({ quantity: 1 });
      console.log("quantity", quantity);

      if (quantity === null) {
        throw new Error("Product not found");
      }
      if (quantity === 0) {
        throw new Error(`Stock out`);
      }

      if (quantity < orderInfo.quantity) {
        throw new Error(`Stock limited. Only ${quantity} items avilable`);
      }
      if (quantity >= orderInfo.quantity && quantity !== null) {
        const updateProductQty = await productModel.findOneAndUpdate(
          { _id: product, quantity: { $gte: orderInfo.quantity } },
          {
            $inc: { quantity: -orderInfo.quantity },
            $set: { updatedAt: new Date() },
          },
          { new: true }
        );

        const result = await OrderModel.create(orderInfo);
        return result;
      }
    }
  } catch (error) {
    throw new Error("Product not found");
  }
};
const revenueCalcFromDB = async () => {
  try {
    const result = await OrderModel.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
      { $project: { _id: 0, totalRevenue: 1 } },
    ]);
    return result.length > 0 ? result[0] : {};
  } catch (error) {
    throw error;
  }
};

export const OrderService = {
  placeAnOrderIntoDB,
  revenueCalcFromDB,
};
