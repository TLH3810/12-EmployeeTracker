const mysql = require('mysql');
const inquirer = require('inquirer')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Dev#2021',
    database: 'employee_db',
});

module.exports = connection;
