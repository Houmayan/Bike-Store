import { Request, Response } from "express";
import { orderService } from "./orders.service";

const createOrderController = async (req: Request, res: Response) => {
  try {
    const playload = req.body;
    const result = await orderService.createOrder(playload);
    // const result = await Product.findById(product);
    // console.log(product);
    // if (result) {
    //   console.log(true);
    // } else {
    //   console.log(false);
    // }
    res.json({
      message: "Order created Successfully",
      status: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const totalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.totalRevenue();
    res.status(200).json({
      success: true,
      message: "Total reveneu calculated successfully",
      data: {
        totalRevenue: result,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const orderController = {
  createOrderController,
  totalRevenue,
};
