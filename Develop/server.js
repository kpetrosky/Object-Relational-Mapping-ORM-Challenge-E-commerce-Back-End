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
require('dotenv').config();

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({force:false})
//in production force false does not empty the tables of old stuff
//in development force true will empty the tables
  .then(() => {
    console.log('Connected to the ecommerce_db database.');
    app.listen(PORT, () => console.log('Now listening'));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
