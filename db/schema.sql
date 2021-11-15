DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(30) NOT NULL,
    ON DELETE SET NULL
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  employee_name VARCHAR(100) NOT NULL,
--   last_name VARCHAR(100) NOT NULL,
  FOREIGN KEY (roles_id)
  REFERENCES roles(id)
  FOREIGN KEY (employee_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
);
