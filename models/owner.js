'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class owner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      owner.hasMany(models.puppy, {
        foreignKey: 'owner_id',
        as: 'puppies'
      });
    }
  };
  owner.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'owner',
  });
  return owner;
};