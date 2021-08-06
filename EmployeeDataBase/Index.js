const inquirer = require("inquirer");


class empDbQ {
    constructor(connection) {
        this.connection = connection;
    }

    //View departments, 
    selectAllDepartments() {
        this.connection.query("SELECT * FROM departments", (err, results) => {
            if (err) {
                console.log(error);
            } else {
                console.log(results)
            }
        });
    }

    //View roles, 
    selectAllEmpRoles() {
        this.connection.query('SELECT * FROM employeeRole', (err, results) => {
            if (err) {
                console.log(error);
            } else {
                console.log(results)
            }
        });
    }

    //View employees
    selectAllEmployees(){
        this.connection.query('SELECT * FROM employee', (err, results) => {
            if (err) {
                console.log(error);
            } else {
                console.log(results)
            }  
        });
    }


    //Add departments, roles, employees
    insertAddEmployee(){

            inquirer.prompt(
                {
                message: "Please enter the Employee First Name ",
                type: "input",
                name:"firstName"
            },
            {
                message: "Please enter the Employee Last Name ",
                type: "input",
                name:"lastName"
            },
            {
                message: "Please enter the Employee Role ID ",
                type: "input",
                name:"roleId"
            },
            {
                message: "Please enter the Employee Manager ID ",
                type: "input",
                name:"managerId"
            },
            )
            .then(answer){
                var fname = answer.firstName;
                var lname = answer.lastName;
                var roleId = answer.roleId;
                var mgid = answer.managerId;
                this.connection.query('INSERT INTO employee SET ?',[{first_name:fname,last_name:lname,role_Id:roleId,manager_Id:mgid}]);    
            }
             
        });

    
    insertAddDepartment(){}
    insertAddRole(){}

//Update employee roles
    updateEmployeeRoll(){}


};

module.exports = empDbQ;