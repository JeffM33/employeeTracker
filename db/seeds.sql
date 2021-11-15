INSERT INTO departments (department)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Salesperson', 50000, 1),
       ('Software Engineer', 120000, 2),
       ('Account Manager', 60000, 3),
       ('Accountant', 40000, 3),
       ('Legal Team Lead', 150000, 4),
       ('Lawyer', 110000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jeff', 'McLeod', 1, null),
       ('Abby', 'Heartfelt', 5, null),
       ('Bobby', 'Carter', 3, null ),
       ('Ramee', 'El Ramen', 2, 3),
       ('Yuno', 'Sykk', 4, 3),
       ('Murphy', 'Braun', 6, 2),
       ('Randy', 'Bullet', 6, 2);
