DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
    department_Id INT NOT NULL IDENTITY,
    department_Name VARCHAR (100),
    PRIMARY KEY (department_Id)
);

CREATE TABLE employeeRole (
    role_Id INT NOT NULL IDENTITY,
    title VARCHAR (30),
    salary DECIMAL (8) NOT NULL,
    department_Id INT NOT NULL,
    PRIMARY KEY (role_Id)
);

CREATE TABLE employee (
    employee_Id INT NOT NULL IDENTITY,
    first_Name VARCHAR (30)NOT NULL,
    last_Name VARCHAR (30)NOT NULL,
    role_Id INT NOT NULL,
    manager_Id INT,
     PRIMARY KEY (employee_Id)
);