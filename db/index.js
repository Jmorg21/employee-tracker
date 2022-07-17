const connection = require('./connection');

class DB {
  constructor(connection){
    this.connection = connection
  }

  findAllDepartments(){
    return this.connection.promise().query('SELECT * FROM department')
  }
  findAllRoles(){
    return this.connection.promise().query ('SELECT role.title, role.id, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;')
  }
  findAllEmployees(){
    return this.connection.promise().query ("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ' , manager.last_name) AS manager FROM employee LEFT JOIN role ON role.id = employee.role_id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.manager_id = employee.id;")
  }

  createNewDepartment(name){
    return this.connection.promise().query ('INSERT INTO department SET ?', name)
  }

  createNewRole(role){
    return this.connection.promise().query('INSERT INTO role SET ?', role)
  }

  createNewEmployee(employee){
    return this.connection.promise().query('INSERT INTO employee SET ?', employee)
  }
}

module.exports= new DB(connection)