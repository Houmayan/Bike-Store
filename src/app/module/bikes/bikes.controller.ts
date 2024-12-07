import { Request, Response } from "express";
import { bikeService } from "./bikes.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const playLoad = req.body;

    const result = await bikeService.createUser(playLoad);
    res.json({
      status: true,
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
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const result = await bikeService.getSingleProduct(userId);
    res.send({
      status: true,
      message: "Product found successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const data = req.body;
    const result = await bikeService.getUpdateProduct(userId, data);
    res.send({
      status: true,
      message: "Product updated successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    // const data = req.body;
    const result = await bikeService.getDeleteProduct(userId);
    res.send({
      status: true,
      message: "Product deleted successfully",
      result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: "Something went wrong",
      error,
    });
  }
};
export const bikesController = {
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
