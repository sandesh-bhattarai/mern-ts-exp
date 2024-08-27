'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     * 
     */
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        // autoIncrement: true, 
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      }, 
      email: {
        type: Sequelize.STRING,
        allowNull: false, 
        unique: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("users");
  }
};
