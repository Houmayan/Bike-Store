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
  createdAt: {
    type: Date,
    // required: true,
  },
  updatedAt: {
    type: Date,
  },
});
productSchema.pre("save", function (this, next) {
  const now = new Date();
  const localTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
  if (!this.createdAt) {
    this.createdAt = localTime;
  }
  this.updatedAt = localTime;
  next();
});

productSchema.pre("findOneAndUpdate", function (this, next) {
  const now = new Date();
  const localTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

  this.set({ updatedAt: localTime });
  next();
});

const Product = model("Product", productSchema);

export default Product;
