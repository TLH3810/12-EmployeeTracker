const connection = require("./employeeConnectDb");

class empDbQ{
    constructor(connection){
        this.connection = connection;
    }


//View departments, 
selectAllDepartments(){
    return this.connection.query(
        "SELECT * employee_db.departments"
    )
}

//View roles, 
selectAllEmpRoles()

//View employees
selectAllEmployees()

//Add departments, roles, employees



//Update employee roles

}
