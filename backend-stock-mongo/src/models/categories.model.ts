import mongoose, { Schema, Document, Model } from "mongoose";
import { ICategory } from "../types/categories";

// Definición del esquema
const categorySchema: Schema<ICategory> = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true },
);

// Definición del modelo
const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
