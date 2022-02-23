'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class puppy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      puppy.belongsTo(
        models.owner,
        {
          foreignKey: 'ownerId',
          // as: 'owner',
          onDelete: 'CASCADE'
        })
    }
  };
  puppy.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'puppy',
  });
  return puppy;
};