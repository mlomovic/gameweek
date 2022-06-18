const Sequelize = require('sequelize');

// const sequelize = new Sequelize({
//   // The `host` parameter is required for other databases
//   // host: 'localhost'
//   dialect: 'sqlite',
//   storage: './database.db'
// });

// For MySQL DB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  logging: function () {},
  pool: {
      max: 15,
      min: 0,
      idle: 10000
  },

});

module.exports = sequelize;
