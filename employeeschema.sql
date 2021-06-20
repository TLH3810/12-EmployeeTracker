DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
    departmentId INTEGER() NOT NULL,
    departmentName VARCHAR (100),
    PRIMARY KEY (departmentId)
);

CREATE TABLE role (
    roleId INTEGER() NOT NULL,
    title VARCHAR (30),
    salary DECIMAL (8) NOT NULL,
    department_id INTEGER ()NOT NULL,
    PRIMARY KEY (roleId)
);

CREATE TABLE employee (
    employeeID INTEGER() NOT NULL,
    first_name VARCHAR (30)NOT NULL,
    last_name VARCHAR (30)NOT NULL,
    role_ID INTEGER() NOT NULL,
    manager_ID INTEGER()
);