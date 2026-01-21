//maneja toda la logica

import { ICategory } from "../types/categories";
import { Category } from "../models/categories.model";

//fields:
//id
//name
//description
//createdAt
//updateAt

const getAllCategory = async (): Promise<ICategory[]> => {
  //logica para obtener las categorias
  await Category.find(); //trae todas las categorias de la BD
};

const getCategoryById = () => {
  //logica para obtener una categoria por ID
};

const createCategory = () => {
  // Logica pra crear una nueva categoria
};

const updateCategory = () => {
  // logica para actualizar una categoria
};

const removeCategory = () => {
  //logica para eliminar una categoria
};
