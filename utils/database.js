const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  // The `host` parameter is required for other databases
  // host: 'localhost'
  dialect: 'sqlite',
  storage: './database.db'
});

module.exports = sequelize;
