import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { OrderValidationSchema } from "./order.zod.validation";

const placeAnOrder = async (req: Request, res: Response) => {
  try {
    const { orderInfo } = req.body;
    const zodParseData = OrderValidationSchema.parse(orderInfo);
    const result = await OrderService.placeAnOrderIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: "Order placed successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};
const revenuecalcOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.revenueCalcFromDB();

    res.status(200).json({
      status: true,
      message: "Revenue calculated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to place order",
      error: error.message,
    });
  }
};

export { placeAnOrder, revenuecalcOrder };
