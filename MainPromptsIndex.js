const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const db = require("./EmployeeDataBase/employeeQueryIndex");
//const { inherits } = require("node:util");
const connection = require("./EmployeeDataBase/employeeConnectDb");


function loadQuestionPrompt() {
    inquirer
        .prompt({
            name: 'action',
            type: 'rawlist',
            message: 'What HR query would you like to run',
            choices: [
                'Find All Employees Roles',

            ],
        })

        .then((answer) => {
            switch (answer.action) {
                case 'Find All Employees Roles':
                    const newDB = new db(connection);
                    newDB.selectAllEmpRoles();
                   
                    break;
            }
        });

};

loadQuestionPrompt();
