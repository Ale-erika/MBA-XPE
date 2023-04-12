import express from "express";
import vendaController from "../controllers/venda.controller.js";

const router = express.Router();

router.post("/", vendaController.createVenda);
router.get("/", vendaController.getVendas);
router.get("/:id", vendaController.getVenda);

export default router;
