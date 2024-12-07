import Product from "../bikes/bikes.model";
import { TOrders } from "./orders.interface";
import Order from "./orders.model";

const createOrder = async (playload: TOrders): Promise<TOrders> => {
  const { productId, quantity } = playload;

  const isExist = await Product.findById(productId);
  if (!isExist) {
    throw new Error("No bike available");
  }
  if (quantity > isExist.quantity) {
    throw new Error("stock is insufficient right now");
  }
  // calculating total Price
  const totalPrice = isExist.price * quantity;
  playload.totalPrice = totalPrice;

  const resutlt = await Order.create(playload);
  if (resutlt) {
    const newQuantity = isExist.quantity - quantity;
    const updateDataOnModel = {
      quantity: newQuantity,
      inStock: newQuantity > 0 ? true : false,
    };
    await Product.findByIdAndUpdate(productId, updateDataOnModel, {
      new: true,
    });
  }
  return resutlt;
};

const totalRevenue = async () => {
  const calculatingRev = await Order.aggregate([
    { $group: { _id: null, totalrevenue: { $sum: "$totalPrice" } } },
  ]);
  const finalRev = calculatingRev[0]?.totalrevenue;
  return finalRev;
};
// const takeOrder =  async ()=>{
//     const result  =
// };

export const orderService = {
  createOrder,
  totalRevenue,
};
