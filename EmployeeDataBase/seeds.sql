use employee_db;

INSERT INTO department()


INSERT INTO department(department_Name)
VALUES
('Executive'),
('Accounting'),
('Banking'),
('Finance'),
('Technology');

INSERT INTO employeeRole (role_Id, title, salary, department_id)
    VALUES
    ('CEO',300000,1),
    ('Director of Accounting', 20000,2),
    ('Accounting Manager',150000,2),
    ('Accountant',100100,2),
    ('Director of Banking',200000,3),
    ('Banking Branch Manager',150000,3),
    ('Banker', 60000,3),
    ('Director of Finance',200000,4),
    ('Finance Investment Manager',150000,4),
    ('Investment Specialist',80000,4)
    ('Director of Technology',200000,5),
    ('Technology Manager',150000,5),
    ('Engineer',110000,5),
    ('Analysist',72000,5),
    ;

INSERT INTO  employee (first_name , last_name, role_ID, manager_ID)
    VALUES
    ('John','Smith',1,NULL),
    ('Adrey', 'Hepburn',2,1),
    ('Robert','Hernedez',3,2),
    ('Anetta', 'Towns',4,3)
    ('Sofia', 'Lauren',5,1),
    ('Jack','Black',8,1),
    ('Tori', 'Jones',11,1),

;