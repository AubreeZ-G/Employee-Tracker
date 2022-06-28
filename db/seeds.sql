use employee_tracker;

insert into department(name) values
('Marketing'), 
('Sales'), 
('HR'), 
('Developers'); 


insert into roles(title,salary,department_id) values
('Manager',10000,1), 
('Manager',20000,2), 
('Manager',30000,3),
('Manager',40000,4); 


insert into employee(first_name,last_name,role_id) values
('Aubree','Zarges',1), 
('Bob','Smith',2), 
('Bill','Burr',3),
('Tommy','Thompson',4);
