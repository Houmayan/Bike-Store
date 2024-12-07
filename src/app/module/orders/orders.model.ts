import { model, Schema } from "mongoose";
import { TOrders } from "./orders.interface";

const ordersSchema = new Schema<TOrders>({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  productId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
  },
});

const Order = model("Order", ordersSchema);
export default Order;
