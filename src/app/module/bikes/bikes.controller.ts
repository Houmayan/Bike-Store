import { Request, Response } from "express";
import Product from "./bikes.model";

const createProduct = async (req: Request, res: Response) => {
  try {
    const playLoad = req.body;

    const result = await Product.create(playLoad);
    res.json({
      message: "User created Successfully",
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "something went wrong",
      // console.log(error);
      error,
    });
  }
};

export const bikesController = {
  createProduct,
};
