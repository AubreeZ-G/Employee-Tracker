DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
use employee_tracker;

CREATE TABLE department(
    id INT AUTO_INCREMENT primary key,
    name VARCHAR(30) );

    CREATE TABLE roles(
        id INT AUTO_INCREMENT primary key,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT references department(id));


CREATE TABLE employee(
    id INT AUTO_INCREMENT primary key,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT references roles(id),
    manager_id INT references employee(id) ON DELETE SET NULL); 