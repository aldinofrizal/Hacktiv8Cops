'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Police extends Model{}
  Police.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {sequelize, modelName : 'Police'});
  Police.associate = function(models) {
    // associations can be defined here
    Police.belongsToMany(models.Category, {through: models.Crime})

  };
  return Police;
};