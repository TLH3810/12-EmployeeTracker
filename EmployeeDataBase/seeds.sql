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
    ('Jack','Black',6,5),
    ('Tori', 'Jones',7,6),
    ('Geffory','Scott',8,1),
    ('Harry','Howard',9,8),
    ('Lynn', 'Christenson',10,9),
    ('Susan','Hsu',11,1),
    ('Hasan','Jackson',12,11),
    ('George','Fredrick',13,12),
    ('Sara','Evans',14,12),
    ('Taylor','Maxton',14,12)
;