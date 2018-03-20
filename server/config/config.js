require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: process.env.CONNECTION_STRING,
    url: process.env.CONNECTION_STRING,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: true
    },
    operatorsAliases: false
  },
  test: {
    url: '',
    dialect: 'postgres'
  },
  production: {
    url: '',
    dialect: 'postgres'
  }
};
