import { TProduct } from "./bikes.interface";
import Product from "./bikes.model";

const createUser = async (playLoad: TProduct): Promise<TProduct> => {
  const result = await Product.create(playLoad);
  return result;
};

const getProduct = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const getUpdateProduct = async (id: string, data: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });

  return result;
};
const getDeleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id, { new: true });
  return result;
};

export const bikeService = {
  createUser,
  getProduct,
  getSingleProduct,
  getDeleteProduct,
  getUpdateProduct,
};
