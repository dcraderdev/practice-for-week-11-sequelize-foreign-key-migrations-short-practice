'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicianInstrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MusicianInstrument.belongsTo(models.Band, {foreignKey: "bandId"});
      MusicianInstrument.belongsToMany(models.Instrument, {through: models.MusicianInstrument});
    }
  };
  MusicianInstrument.init({
    musicianId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MusicianInstrument',
  });
  return MusicianInstrument;
};