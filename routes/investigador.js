const express = require("express");
const router = express.Router();
const investigadorController = require("../controllers/investigador");

// Vista crear investigador
router.post("/createInvestigador", investigadorController.createInvestigador);

// Consultar investigadores
router.get("/getInvestigador", investigadorController.getInvestigador);

// Guardar investigador
router.post("/storeInvestigador", investigadorController.storeInvestigador);

// Actualizar investigador
router.post("/updateInvestigador", investigadorController.updateInvestigador);

// borrar investigador
router.post("/deleteInvestigador", investigadorController.deleteInvestigador);

module.exports = router;