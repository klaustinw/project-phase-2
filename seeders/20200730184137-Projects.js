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

   await queryInterface.bulkInsert('Projects', [{
    name: 'WoW',
    difficulty: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Sudoku',
    difficulty: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Battleships',
    difficulty: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Projects', null, {});
  }
};
