import { model, Schema } from "mongoose";
import { TProduct } from "./bikes.interface";

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: {
      values: ["Mountain", "Road", "Hybrid", "Electric"],
      message: "Category should be Mountain, Road, Hybrid, Electric",
    },
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;
