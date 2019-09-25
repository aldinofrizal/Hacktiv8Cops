"use strict";
const hashPassword = require("../helper/hashPassword");

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Police extends Model {}
  Police.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      salt: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Police",
      hooks: {
        beforeCreate: (instance, option) => {
          const salt = String(Math.random() * 1000);
          const password = hashPassword(this.password, salt);
          instance.setDataValue("password", password);
          instance.setDataValue("salt", salt);
        }
      }
    }
  );
  Police.associate = function(models) {
    // associations can be defined here
    Police.belongsToMany(models.Category, { through: models.Crime });
  };
  return Police;
};
