INSERT INTO departments (department)
VALUES (1, 'Sales'),
       (2, 'Engineering'),
       (3, 'Finance'),
       (4, 'Legal');

INSERT INTO roles (department_id, title, salary)
VALUES (1, 'Salesperson', 50000),
       (2, 'Software Engineer', 120000),
       (3, 'Account Manager', 60000),
       (3, 'Accountant', 40000),
       (4, 'Legal Team Lead', 150000),
       (4, 'Lawyer', 110000);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES ('Jeff', 'McLeod', 1, 3),
       ('Abby', 'Heartfelt', 5, null),
       ('Bobby', 'Carter', 3, null ),
       ('Ramee', 'El Ramen' 2, 3),
       ('Yuno', 'Sykk', 4, 3),
       ('Murphy', 'Braun', 6, 2),
       ('Randy', 'Bullet', 6, 2);
