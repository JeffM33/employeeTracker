const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

db.query(
    'SELECT * FROM departments',
    function(err, results, fields) {
        console.log(results);
        console.log(fields);
    },
);

