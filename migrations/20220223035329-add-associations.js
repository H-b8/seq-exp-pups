'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { // what changes we're implementing
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn(
      'puppies', // name of the source model
      'owner', // name of the key that we're adding
      {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'owners',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    )
  },

  down: async (queryInterface, Sequelize) => { // return the database to the state before the migration
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn(
      'puppies', // table we're operating on
      'owner' // column we're removing
    )
  }
};
