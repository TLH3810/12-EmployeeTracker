const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'Dev#2021',
    database: 'employee_db',
});
