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

   await queryInterface.bulkInsert('Students', [{
      name: 'John Doe',
      age: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jane Doe',
      age: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Soe Doe',
      age: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bo Doe',
      age: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Klaustin',
      age: 90,
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

    await queryInterface.bulkDelete('Students', null, {});
  }
};
