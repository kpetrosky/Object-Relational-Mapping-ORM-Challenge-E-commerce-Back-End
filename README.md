# Object-Relational-Mapping-ORM-Challenge-E-commerce-Back-End
USER:
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
ACCEPTANCE:
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
    My motivation for this project is to use the backend to create a database that using insomnia
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    I built this project to continue growing as developer. Getting the backend to talk to the frontend is difficult, this project helped me understand how to use seeds and insomnia.  
- What problem does it solve?
    The problem was connecting a database use Sequelize. 
- What did you learn?
    I learned how to connect the database use Sequelize and how set up insomnia to check the database 

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
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

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

