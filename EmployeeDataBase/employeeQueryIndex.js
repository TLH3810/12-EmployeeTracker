

class empDbQ{
    constructor(connection){
        this.connection = connection;
    }

//View departments, 
selectAllDepartments(){
    return this.connection.query(
        "SELECT * FROM employee_db.departments"
    );
}

//View roles, 
selectAllEmpRoles(){

   
        this.connection.query('SELECT * FROM employeeRole', (err, results) => {
            if (err){
                console.log(error);
            } else {
                console.log(results)
            }
           
        });
        
    
    
}

//View employees
//selectAllEmployees(){
 //   return this.connection.query(
//        "SELECT 
//        FROM employee_db.employee
//        LEFT JOIN employee_db.departments on employee.role_Id = department.role_Id"
        

 //Add departments, roles, employees



//Update employee roles
};

module.exports = empDbQ;