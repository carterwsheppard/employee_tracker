INSERT INTO department (name)
VALUES
('Engineering')
,('Sales')
,('HR')
,('IT')
,('Marketing')
,('Executive');


INSERT INTO employment_role (title, salary, department_id)
VALUES
('Engineering Manager',120000,1),
('Sales Rep',70000,2),
('HR Specialist',70000,3),
('IT Help Desk',80000,4),
('Engineer',90000,1),
('Marketing & HR Manager',75000,5),
('CEO',250000,6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Hannah','Benedict',6,7)
,('Carter','Eggs',1,7)
,('Kevin','Over',2,7)
,('Billy','Bob',3,6)
,('Darren','James',4,7)
,('Teddie','Jane',5,1)
,('Mark',"Money",7,null);
