import mongoose, { Schema, Document, Model } from "mongoose";
import { ICategory } from "../types/categories";

// Definición del esquema
const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true, // el trim elimina espacios al inicio y al final
    },
    description: { type: String, trim: true },
  },
  { timestamps: true },
);

// Definición del modelo
const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
