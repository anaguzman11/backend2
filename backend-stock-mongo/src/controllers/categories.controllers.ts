import { Request, Response } from "express";

//CRUD

//getAll()
//logica para obtener todas las categorias
export const getAll = (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json({ message: "aqui estarán todas las categorias" });
  } catch (error) {
    return res.status(500).json({ message: "error al obtener las categorias" });
  }
};

//getById
//logica para obtener una categoria por ID
export const getById = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return res
      .status(200)
      .json({ mensaje: "aqui estara la categoria con ID: ${id}" });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "error al obtener la categoria ${id}" });
  }
};
//create ()
//logica para crear una nueva categoria
export const create = (req: Request, res: Response) => {
  try {
    return res.status(201).json({ mensaje: "categoria creada exitosamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: "error al crear la categoria" });
  }
};

//update
export const update = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return res
      .status(200)
      .json({ mensaje: "categoria actualizada exitosamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: "error al actualizar la categoria" });
  }
};

//remove ()
export const remove = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return res
      .status(200)
      .json({ mensaje: `categoria con ID ${id} eliminada exitosamente` });
  } catch (error) {
    return res.status(500).json({ mensaje: "error al eliminar la categoria" });
  }
};
