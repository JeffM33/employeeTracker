SELECT employees.department AS departments, departments.department 
FROM departments
LEFT JOIN employees
ON departments.employees_id = employees.id
ORDER BY employees.employee_name;