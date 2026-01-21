import { Router } from "express";
import * as categoriesController from "../controllers/categories.controllers";

const router: Router = Router();

// getAll ()
router.get("/", categoriesController.getAll);

//getById ()
router.get("/:id", categoriesController.getById);

//create (), update(), delete ()
router.post("/", categoriesController.create);
router.put("/:id", categoriesController.update);
router.delete("/:id", categoriesController.remove);

export default router;
