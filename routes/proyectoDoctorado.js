const express = require("express");
const router = express.Router();
const proyectoDoctoradoController = require("../controllers/proyectoDoctorado");

// Vista crear proyecto doctorado
router.get("/createProyectoDoctorado", proyectoDoctoradoController.createProyectoDoctorado);

// Consultar proyecto doctorado
router.get("/getProyectoDoctorado", proyectoDoctoradoController.getProyectoDoctorado);

// Guardar proyecto doctorado
router.post("/storeProyectoDoctorado", proyectoDoctoradoController.storeProyectoDoctorado);

// Actualizar proyecto doctorado
router.post("/updateProyectoDoctorado", proyectoDoctoradoController.updateProyectoDoctorado);

// Actualizar proyecto doctorado
router.post("/deleteProyectoDoctorado", proyectoDoctoradoController.deleteProyectoDoctorado);

module.exports = router;
