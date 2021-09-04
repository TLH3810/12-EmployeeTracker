const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const db = require("./EmployeeDataBase/Index");
//const { inherits } = require("node:util");
const connection = require("./EmployeeDataBase/employeeConnectDb");

function loadQuestionPrompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What HR query would you like to run',
            choices: [
                'Find All Employees Roles',
                'Find All Employees',
                'Find All Departments',
                'Add a New Employee',
                'Add a New Department',
                'Add a New Role',
                'Update an Employee Role'

            ],
        })
        .then((answer) => {
            const newDB = new db(connection);
            switch (answer.action) {
                case 'Find All Employees Roles':
                    newDB.selectAllEmpRoles();
                    break;
                case 'Find All Employees':
                   newDB.selectAllEmployees();
                   break;
                case 'Find All Departments':
                    newDB.selectAllDepartments();
                   break;
                case 'Add a New Employee':
                    newDB.insertAddEmployee();
                    break;
                case 'Add a New Department':
                    newDB.insertAddDepartment();
                    break;
                case 'Add a New Role':
                    newDB.insertAddRole();
                    break;
                case 'Update an Employee Role':
                    newDB.updateEmployeeRoll();
                    break;
                   
            }
           // return answer;
        }) .then(() => {
            console.log("data")
            //loadQuestionPrompt();
        });     
};
connection.connect((err) => {
    if (err) throw err;
    console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
    loadQuestionPrompt();
});


/* function quit() {
    console.log("Goodbye!");
    process.exit();
  }
  quit(); */
