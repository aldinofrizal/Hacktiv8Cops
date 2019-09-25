'use strict';
const average = require('../helper/average')


module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Crime extends Model{
    
    static getCenteredCoords(rows){
          let longs = []
          let lats = []
          rows.forEach(x => {
            longs.push(x.longitude)
            lats.push(x.latitude)
          })
          let longsAvg = average(longs)
          let latsAvg = average(lats)
          
          const coord = { longsAvg, latsAvg }
          return ({longsAvg,latsAvg})
    }

  }
  Crime.init({
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    CategoryId: DataTypes.INTEGER,
    PolouseId: DataTypes.INTEGER,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    victim: DataTypes.STRING,
    status: DataTypes.STRING,
    description : DataTypes.STRING
  }, {sequelize , modelName : 'Crime'});
  Crime.associate = function(models) {
    // associations can be defined here
    Crime.belongsTo(models.Category)
    Crime.belongsTo(models.Police)
  };
  return Crime;
};