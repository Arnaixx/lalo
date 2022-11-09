const path = require("path");
const Investigador = require("../utils/database").models.Investigador;
const sequelize =require("../utils/database");
const Sequelize = require("sequelize");
/**
 * Retorna los investigadores.
 * @returns {Promise<*>}
 */
 exports.getInvestigador = (__req, res) => {
    Investigador.findAll()
      .then((investigadores) => {
        console.log("Investigadores", investigadores);
        res.send(investigadores);
      })
      .catch((e) => {
        console.log(e);
        res.send({ Error: e });
      });
  };
  
  /**
   * Retorna la vista para crear investigadores.
   * @returns {Promise<*>}
   */
   exports.createInvestigador = (req,res)=>{
    console.log(req.body)
    Investigador.create(req.body)
        .then(ca=>{
            console.log("Registro Existoso")
            res.json({estado: "Exitoso"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
  };
  
  /**
   * Guarda un Investigador creado desde el formulario.
   * @returns {Promise<*>}
   */
  exports.storeInvestigador = (req, res) => {
    console.log(req.body);
    Investigador.create(req.body)
      .then((__res) => {
        res.send("Registro exitoso");
      })
      .catch((error) => {
        res.send({ error: error });
      });
  };
  
  /**
   * Actualiza investigador.
   * @returns {Promise<*>}
   */
  exports.updateInvestigador = async (req, res) => {
    const investigadorActualizar = await Investigador.findOne({
      where: {
        idinvestigador: req.body.idinvestigador,
      },
    });
  
    if (investigadorActualizar) {
      Investigador.update(req.body, {
        where: {
          idinvestigador: req.body.idinvestigador,
        },
      })
        .then(() => {
          console.log("Investigador actualizado");
          res.send("Investigador actualizado");
        })
        .catch((e) => {
          console.log(e);
          res.send({ Error: e });
        });
    } else {
      res.send({ Error: "No existe el investigador" });
    }
  };
  
  /**
   * Eliminar investigador.
   * @returns {Promise<*>}
   */
  exports.deleteInvestigador = (req, res) => {
    Investigador.destroy({
      where: {
        idinvestigador: req.body.id,
      },
    })
      .then(() => {
        res.send("Investigador eliminado");
      })
      .catch((e) => {
        console.log(e);
        res.send({ Error: e });
      });
  };