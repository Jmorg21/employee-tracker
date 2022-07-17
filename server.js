const inquirer = require('inquirer');
const { findAllRoles } = require('./db');
const db = require('./db');
require('console.table');

function start(){
  loadQuestions()
}

function loadQuestions(){
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'userResponse',
        message: 'What would you like to do?',
        choices: [
          'view all departments', 
          'view all roles',
          'view all employees', 
          'add a department', 
          'add a role', 
          'add an employee', 
          'Quit'
        ]
      },
    ])

.then((answers) => {
    console.log(answers.userResponse)
  const userResponse = answers.userResponse;

    switch (userResponse) {
      case 'view all departments':
        viewAllDepartments();
        break;
      case 'view all roles':
        viewAllRoles();
        break;
      case 'view all employees': 
        viewAllEmployees();
        break;
      case 'add a department':
        addDepartment();
        break;
      case 'add a role':
        addRole();
        break;
      case 'add an employee':
        addEmployee();
        break;
      case 'update an employee role':
        updateRole();
        break;
      default:
        process.exit();
    }
  })

}

function viewAllDepartments(){
  db.findAllDepartments().then(([depts])=>{
    console.table(depts)
  }).then(()=> loadQuestions())
};

function viewAllRoles(){
  db.findAllRoles().then(([roles]) => {
    console.table(roles)
  }).then(()=> loadQuestions())
};

function viewAllEmployees(){
  db.findAllEmployees().then(([employees]) => {
    console.table(employees)
  }).then(()=> loadQuestions())
};

function addDepartment(){
  db.findAllDepartments().then(() => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?'
      }
    ]).then((answers) => {
      db.createNewDepartment(answers)
      .then(() => loadQuestions());
    })
  })
};


function addRole(){
  db.findAllDepartments().then(([depts]) => {

    let departments = depts.map(({id, name}) => ({
      name: name,
      value: id
    }))

    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: "What is the title of the role?"
      }, 
      {
        type:'input',
        name: 'salary',
        message: "What is the salary for the role?"
      }, 
      {
        type: 'list',
        name: 'department_id',
        message: "What department does the role belong to?",
        choices: departments
      }
    ]).then((answers) => {
      db.createNewRole(answers)
      .then(() => loadQuestions());
    })
  })
};

function addEmployee(){
  db.findAllRoles().then(([roles]) => {

    let roleChoices = roles.map(({id, title}) => ({
      name: title,
      value: id
    }))

    inquirer.prompt([
      {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
      }, 
      {
        type:'input',
        name: 'last_name',
        message: "What is the employee's last name?"
      }, 
      {
        type: 'list',
        name: 'role_id',
        message: "What is the employee's role?",
        choices: roleChoices
      },
    ]).then((answers)=>{
      db.createNewEmployee(answers)
      .then(()=> loadQuestions());
    })
  })
};

  start();