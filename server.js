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

        const sql = `SELECT id, departmentName AS Departments FROM departments`

        db.query(sql, (error, res) => {
            if (error) throw error;
            console.table(res);
            menu();
        });
    }

    function viewRoles() {
        console.log('Viewing Roles');

        const sql = `SELECT roles.id, title, departmentName AS Departments, salary FROM departments JOIN roles ON departments.id = roles.department_id`

        db.query(sql, (error, res) => {
            if (error) throw error;
            console.table(res);
            menu();
        });
    }

    function viewEmp() {
        console.log('Viewing Employees');

        const sql = `SELECT employee.id AS ID, first_name, last_name, title, departmentName AS Departments, salary, manager_id AS Manager_Employee_ID
        FROM employee INNER JOIN roles ON employee.role_id = roles.id
        INNER JOIN departments ON roles.department_id = departments.id`

        db.query(sql, (error, res) => {
            if (error) throw error;
            console.table(res);
            menu();
        });
    }

    function addDepartment() {
        console.log('Adding new department');
        inquirer.prompt([
            {
                type: 'input',
                name: 'departments',
                message: `Department's name?`
            }
        ])
        .then(function (answers) {
            const sql = 'INSERT INTO departments (departmentName) VALUES ( ? )';

            db.query(sql, answers.departments, function (err,res){
                if (err) throw err;
            }) 
            menu();
        });
        
    };

    function addRole() {
        console.log('Adding new role');
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: `What is the title of the new role?`
            },
            {
                type: 'input',
                name: 'salary',
                message: `How much do you make in this new role?`
            },
            {
                type: 'input',
                name: 'departmentId',
                message: `Which department is this role associated with?`
            },
            
        ])
        .then(function (answers) {
            const sql = 'INSERT INTO roles SET ?';

            db.query(sql, 
                {
                    title: answers.title,
                    salary: answers.salary, 
                    department_id: answers.departmentId
                },
                function (err, res) {
                    if (err) throw err;
                })
            menu();
        }); 
    };

    function addEmp(){
        inquirer
          .prompt([
            {
              type: 'input',
              name: 'firstName',
              message: `New employee's first name?`
            },
            {
              type: 'input', 
              name: 'lastName',
              message: `New employee's last name?`
            },
            {
              type: 'list',
              message: `Enter the new employee role`,
              choices: [
                  { name: 'Salesperson ', value: 1},
                  { name: 'Software Engineer', value: 2},
                  { name: 'Account Manager', value: 3},
                  { name: 'Accountant ', value: 4},
                  { name: 'Legal Team Lead', value: 5},
                  { name: 'Lawyer', value: 6},
              ],
              name: 'role_id'
            },
            // {
            //     type: 'list',
            //     message: `Enter the new employee's Manager`,
            //     choices: [
            //         { name: 'Jeff McLeod ', value: 1},
            //         { name: 'Ramee       El Ramen', value: 2},
            //         { name: 'Bobby       Carter', value: 3},
            //         { name: 'Yuno        Sykk ', value: 4},
            //         { name: 'Abby        Heartfelt ', value: 5},
            //         { name: 'Randy       Bullet ', value: 7},
            //     ],
            //     name: 'role_id'
            //   },
          ])
        .then(function (answer) {
          const sql = "INSERT INTO employee SET ?";
        
          db.query(sql, 
           {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
          }, 
            function (err, res) {
             if (err) throw err;
           })
           menu();
        })
      }

}


