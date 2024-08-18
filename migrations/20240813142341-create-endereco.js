'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('enderecos', {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncremente: true,
        allowNull: false,
      },
      Cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Logradouro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Complemento: {
        type: Sequelize.STRING,
      },
      Bairro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      MunicipioIBGE: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });

  },











  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
