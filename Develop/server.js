//npm i inquirer@8.2.4
//npm i express
//npm install --save-dev sequelize-cli
//npm i dotenv mysql2 console.table
//npm install --save sequelize
//npm init -y
//mysql -u root -p
//SOURCE schema.sql;
//SOURCE insert-schema.sql;
//SHOW databases;
//SHOW tables;
//node server.js

const express = require('express');
const routes = require('./routes');
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('ecommerce_db', 'root', process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the ecommerce_db database.');
    app.listen(PORT, () => console.log('Now listening'));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
  
module.exports = sequelize;
