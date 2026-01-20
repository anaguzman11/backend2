import { Schema, model } from "mongoose";

const BookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    genres: { type: [String], default: [] },
  },
  { timestamps: true },
);

export const Book = model("Book", BookSchema);
