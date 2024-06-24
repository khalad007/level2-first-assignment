import { Schema, model } from "mongoose";
import { Product } from "./product/product.interface";

const productSchema = new Schema<Product>({
  id: { type: String },
  description: { type: String },
  category: { type: String },
  tags: {
    type: String,
    enum: ["smartphone", "Apple", "iOS"],
    messasge: "smartphone, apple , ios is required",
  },
  variants: {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  inventory: {
    quantity: {
      type: String,
      required: true,
    },
    inStock: {
      type: Boolean,
      required: true,
    },
  },
});

export const ProductModel = model<Product>("Product", productSchema);
