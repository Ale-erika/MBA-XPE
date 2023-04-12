import express from "express";
import autorController from "../controllers/autor.controller.js";

const router = express.Router();

router.post("/", autorController.createAutor);
router.get("/", autorController.getAutores);
router.get("/:id", autorController.getAutor);
router.put("/", autorController.updateAutor);
router.delete("/:id", autorController.deleteAutor);

export default router;
