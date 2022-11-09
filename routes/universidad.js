const express = require('express');
const router = express.Router();
const universidadController= require('../controllers/universidad')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas

//Servicio para procesar los datos del formulario
router.post('/altaUniversidad',universidadController.postAltaUniversidad);
//Servicio para consultar todos los datos
router.get('/consultaUniversidad',universidadController.getUniversidad);
//Servicio para eliminar un registro por id
router.post('/bajaUniversidad', universidadController.postEliminarUniversidad);
//Servicio para actualizar las consola
router.post('/actualizarUniversidad',universidadController.postActualizarUniversidad);

module.exports = router