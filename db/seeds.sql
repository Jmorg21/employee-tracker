use employees;

INSERT INTO department
    (dept)
VALUES
    ('Management'),
    ('Engineering'),
    ('Accounting'),
    ('Customer Service');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Manager Lead', 100000, 1),
    ('Manager', 80000, 1),
    ('Head Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Head Accountant', 160000, 3),
    ('Accountant', 125000, 3),
    ('Team Lead', 250000, 4),
    ('Representative', 50000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Sidney', 'Crosby', 1, NULL),
    ('Evgeni', 'Malkin', 2, 9),
    ('Kris', 'Letang', 3, NULL),
    ('Jake', 'Guentzel', 4, 10),
    ('Bryan', 'Rust', 5, NULL),
    ('Brian', 'Dumoulin', 6, 11),
    ('Jeff', 'Carter', 7, NULL),
    ('Tristen', 'Jarry', 8, 12);
