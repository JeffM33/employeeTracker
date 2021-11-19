const mysql = require('mysql2');
const inquirer = require('inquirer');

const Choices = require('inquirer/lib/objects/choices');
require('console.table');

init();
// Connect to database
async function init() {
    const db = mysql.createConnection(
        {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db'
        },
        console.log(`Connected to the employees_db database.`)
    );

    menu();
    function menu(){
        inquirer.prompt({
            type: 'list',
            name: 'assignment',
            message: "Please take a look at your options, what would you like to do?",
            choices: [
                'View Departments',
                'View Roles',
                'View Employees',
                'add department',
                'add Role',
                'add Employee',
                'Update Employee Role',
                'End'
            ]
        })
        .then(function ({assignment}) {
            switch (assignment) {
                case 'View Departments':
                    viewDepartments();
                    break;
                case 'View Roles':
                    viewRoles();
                    break;
                case 'View Employees':
                    viewEmp();
                    break;
                case 'add department':
                    addDepartment();
                    break;
                case 'add Role':
                    addRole();
                    break;
                case 'add Employee':
                    addEmp();
                    break;
                case 'Update Employee Role':
                    updateEmpRole();
                    break;
                case 'End':
                    db.end();
                    break;
            }
        });
    }

    function viewDepartments() {
        console.log('Viewing Departments');

        const sql = `SELECT * FROM departments`

        db.query(sql, (error, res) => {
            if (error) throw error;
            console.table(res);
            menu();
        });
    }

}


