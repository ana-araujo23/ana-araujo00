import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.js'; // Importe sua instância do Sequelize

// const Produto = sequelize.define(
//   "produtos",
//   {
//     nomeProduto: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     descricaoProduto: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     precoProduto: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     categoriaProduto: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     subcategoriaProduto: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     tamanhoProduto: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: false,
//   }

// );

class Produto extends Model {}
Produto.init(
  {
    nomeProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricaoProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precoProduto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoriaProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategoriaProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tamanhoProduto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize, 
    modelName: 'Produto',
    tableName: 'produtos',
    timestamps: true,
    underscored: true,
  }
);

export default Produto;
