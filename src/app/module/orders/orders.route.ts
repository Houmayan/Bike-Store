import { Router } from "express";
import { orderController } from "./orders.controller";
// import { express } from 'express';
const router = Router();

router.post("/orders", orderController.createOrderController);
router.get("/orders/revenue", orderController.totalRevenue);
export const orderRoutes = router;
