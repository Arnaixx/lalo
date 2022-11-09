const Sequelize = require("sequelize");
const Universidad = (sequelize) => {
  sequelize.define("Universidad", {
    iduniversidad: {
      type: Sequelize.INTEGER,autoIncrement: true,primaryKey: true,
    },
    nombreUniversidad: Sequelize.STRING(60),
    paisUniversidad: Sequelize.STRING(45),
    descripcionUniversidad: Sequelize.STRING(100),
  });
};

module.exports = Universidad;