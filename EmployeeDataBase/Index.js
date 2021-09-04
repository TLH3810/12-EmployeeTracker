const cTable = require('console.table');
const inquirer = require("inquirer");

class empDbQ {
    constructor(connection) {
        this.connection = connection;
    }

    //View departments, 
    selectAllDepartments() {
        this.connection.query("SELECT * FROM department", (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        });
    }

    //View roles, 
    async selectAllEmpRoles() {
        await this.connection.query('SELECT * FROM employeeRole', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);

            }
        })
    };

    //View employees
    selectAllEmployees() {
        this.connection.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }
        });
    }


    //Add departments, roles, employees
    insertAddEmployee() {
        inquirer.prompt(
            [{
                message: "Please enter the Employee First Name ",
                type: "input",
                name: "firstName"
            },
            {
                message: "Please enter the Employee Last Name ",
                type: "input",
                name: "lastName"
            },
            {
                message: "Please enter the Employee Role ID ",
                type: "input",
                name: "roleId"
            },
            {
                message: "Please enter the Employee Manager ID ",
                type: "input",
                name: "managerId"
            }]
        )
            .then((answer) => {
                var fname = answer.firstName;
                var lname = answer.lastName;
                var roleId = answer.roleId;
                var mgid = answer.managerId;
                this.connection.query('INSERT INTO employee SET ?', [{ first_name: fname, last_name: lname, role_Id: roleId, manager_Id: mgid }]);
            });

    }


    insertAddDepartment() {
        inquirer.prompt(
            {
                message: "Please enter the Department Name",
                type: "input",
                name: "departmentName"
            },
        )
            .then((answer) => {
                var dptName = answer.departmentName;
                this.connection.query('INSERT INTO department SET ?', [{ department_Name: dptName }]);
            });
    }

    insertAddRole() {
        inquirer.prompt(
            [{
                message: "Please enter the role title",
                type: "input",
                name: "roleName"
            },
            {
                message: "Please enter the salary",
                type: "input",
                name: "salaryAmt"
            },
            {
                message: "Please enter department number",
                type: "input",
                name: "roleDeptId"
            }]
        )
            .then((answer) => {
                var rlName = answer.roleName;
                var salAmt = answer.salaryAmt;
                var rDptId = answer.roleDeptId;
                this.connection.query('INSERT INTO employeeRole SET ?', [{ title: rlName, salary: salAmt, department_Id: rDptId }]);
            });
    }

    //Update employee roles
    updateEmployeeRoll() {
        inquirer.prompt(
            [{
                message: "Please enter the employee ID",
                type: "input",
                name: "inptEmpId"

            },
            {
                message: "Please enter the new role ID",
                type: "input",
                name: "updateRoleId"
            }])
            .then((answer) => {
                var empId = answer.inptEmpId;
                var updtRlId = answer.updateRoleId;
                this.connection.query('UPDATE employee SET ? WHERE ?', [{ role_Id: updtRlId }, { employee_Id: empId }])
            }

            );
    }


};

module.exports = empDbQ;