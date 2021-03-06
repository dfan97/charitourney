var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Battle = sequelize.define("Battle", {
    round: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 1}
  }, {
    classMethods: {
      associate: function(models) {
        Battle.belongsTo(models.Tournament);
        Battle.belongsTo(models.Charity, { as: 'Charity1' });
        Battle.belongsTo(models.Charity, { as: 'Charity2' });
        Battle.hasMany(models.Choice);
      }
    }
  });
  return Battle;
};