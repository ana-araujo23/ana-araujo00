'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', {
       id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowfull:false,
       },
       nomeProduto:{
        type: Sequelize.STRING,
        allowfull:false,
       },
       descricaoProduto:{
        type: Sequelize.STRING,
        allowfull:false,
       },
       precoProduto:{
        type: Sequelize.STRING,
        allowfull:false,
       },
       categoriaProduto:{
        type: Sequelize.STRING,
        allowfull:false,
       },
       subcategoriaProduto:{
        type: Sequelize.STRING,
        allowfull:false,
       },
       tamanhoProduto:{
        type: Sequelize.STRING,
        allowfull:false,
       },
       created_at:{
        type: Sequelize.DATE,
        allowNull: false,
       },
       updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
       }
      });
  },

  down: (queryInterface, Sequelize) => {

  }
};
