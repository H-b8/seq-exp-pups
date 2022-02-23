'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('puppies', [
      {
        name: 'General Dino',
        age: 4,
        breed: 'Assemblasaurus',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Littlefoot",
        age: 100,
        breed: "apatosaurus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cera",
        age: 420,
        breed: "triceratops",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ducky",
        age: 69,
        breed: "saurolophus",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Petrie",
        age: 888,
        breed: "pteranodon",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spike",
        age: 999,
        breed: "stegosaurus",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('puppies', null, {});
  }
};
