'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Crime extends Model{}
  Crime.init({
    CategoryId: DataTypes.INTEGER,
    PolouseId: DataTypes.INTEGER,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    victim: DataTypes.STRING
  }, {sequelize , modelName : 'Crime'});
  Crime.associate = function(models) {
    // associations can be defined here
  };
  return Crime;
};