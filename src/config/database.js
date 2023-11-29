import { Sequelize } from 'sequelize';
// import ProdutoModel from '../models/produtos.js';

const conexão = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'toor',
  database: 'Crudnode',
  define: {
    timestamps: true,
    underscored: true,
  }
};

const sequelize = new Sequelize(conexão);
// Função para verificar a conexão com o banco de dados
function conn() {
  //Tenta autenticar a conexão com o banco de dados
  try {
    sequelize.authenticate();
    return "Banco conectado";
  } catch (error) {
    console.log(error.message);
  }
}


// async function conectarBanco() {
//   try {

//     const Produto = ProdutoModel.init(sequelize);

//     await sequelize.sync();

//     console.log('Modelo Produto sincronizado com o banco de dados.');

//     return sequelize; // Retorna a instância do Sequelize após a configuração
//   } catch (error) {
//     console.error('Erro ao conectar/sincronizar o modelo Produto:', error);
//     throw error; // Lança o erro para tratamento posterior, se necessário
//   }
// }

export {sequelize,conn}; // Exporta a função conectarBanco
