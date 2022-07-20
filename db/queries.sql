use employee_tracker;

select * from department;

select * from roles;

select * from employee;

select r.id, r.title,d.name from roles r , department d  where r.department_id = d.id;