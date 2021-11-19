INSERT INTO departments (departmentName)
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

INSERT INTO employee (first_name, last_name, manager_id)
VALUES ('Jeff', 'McLeod', null),
       ('Abby', 'Heartfelt', null),
       ('Bobby', 'Carter',  null ),
       ('Ramee', 'El Ramen',  3),
       ('Yuno', 'Sykk',  3),
       ('Murphy', 'Braun', 2),
       ('Randy', 'Bullet', 2);
