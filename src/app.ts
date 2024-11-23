import express, { Application, Request, Response } from "express";
import { productRouter } from "./modules/product/product.route";
import orderRouter from "./modules/order/order.route";
const app: Application = express();
// parser
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Bike server is ruuning",
  });
});

export default app;
