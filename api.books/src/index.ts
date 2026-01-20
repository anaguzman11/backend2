import express from "express";
import { connectDB } from "./config/db";
import bookRoutes from "./routes/book.routes";

const app = express();
app.use(express.json());

app.use("/books", bookRoutes);

connectDB();

app.listen(3000, () => console.log("Servidor en puerto 3000"));
