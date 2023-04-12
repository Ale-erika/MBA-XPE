import express from "express";
import clienteController from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/", clienteController.createCliente);
router.get("/", clienteController.getClientes);
router.get("/:id", clienteController.getCliente);
router.put("/", clienteController.updateCliente);
router.delete("/:id", clienteController.deleteCliente);

export default router;
