//npm i inquirer@8.2.4
//npm i dotenv mysql2 console.table
//npm init -y
//mysql -u root -p
//SOURCE schema.sql;
//SOURCE insert-schema.sql;
//SHOW databases;
//SHOW tables;
//node server.js


const Sequelize = require('sequelize');

// Enable access to .env variables
require('dotenv').config();

// Use environment variables to connect to database
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;