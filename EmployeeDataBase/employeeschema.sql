DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
    department_Id INTEGER() NOT NULL,
    department_Name VARCHAR (100),
    PRIMARY KEY (departmentId)
);

CREATE TABLE employeeRole (
    roleId INTEGER() NOT NULL,
    title VARCHAR (30),
    salary DECIMAL (8) NOT NULL,
    department_Id INTEGER ()NOT NULL,
    PRIMARY KEY (roleId)
);

CREATE TABLE employee (
    employee_Id INTEGER() NOT NULL,
    first_Name VARCHAR (30)NOT NULL,
    last_Name VARCHAR (30)NOT NULL,
    role_Id INTEGER() NOT NULL,
    manager_Id INTEGER(),
     PRIMARY KEY (employee_Id)
);