import express from "express";
import { placeAnOrder, revenuecalcOrder } from "./order.controller";

const orderRouter = express.Router();

orderRouter.post("/", placeAnOrder);
orderRouter.get("/revenue", revenuecalcOrder);

export default orderRouter;
