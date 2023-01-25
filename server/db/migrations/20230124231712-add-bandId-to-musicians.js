'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


  await queryInterface.addColumn('Musicians','bandId', {

          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'Bands'},
          onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('Musicians', 'bandId')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
