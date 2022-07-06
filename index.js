//pull in modules

const inquirer = require('inquirer');
const fetch = require('node-fetch');



//Setup prompt function in window to collect needed README information
const startApp = (questionData) => {

    if (!questionData) {
        questionData = [];
    };

    return inquirer.prompt([

        //select the desired option
        {
            type: "list",
            name: "view",
            message: "What would you like to do?",
            choices: [
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role"
            ]
        }
    ]).then(answer => {
        // can possibly reference answer
        switch(answer.view) {
            case "View all Departments":
                viewAllDepartments();
                break;

            case "View all Roles":
                viewAllRoles();
                break;

            case "View all Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                addDepartmentPrompt()
                    .then(department => addDepartment(department));
                break;

            case "Add a Role":
                addRolePrompt()
                    .then(role => addRole(role));
                break;

            case "Add an Employee":
                addEmployeePrompt()
                    .then(employee => addEmployee(employee));
                return;

            case "Update an Employee Role":
                updateEmployee();
                return;

        }
    })
}



// show all departments
viewAllDepartments = () => {
    fetch('http://localhost:3001/api/departments', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(answer => {console.log(answer)})

      startApp();

    };

//show all roles
viewAllRoles = () => {
        fetch('http://localhost:3001/api/employment_role', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
    
        startApp();
    };
    
// show all employees
viewAllEmployees = () => {
        fetch('http://localhost:3001/api/employees', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
    
        startApp();};
    
    
addDepartmentPrompt = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of the department you would like to add?"
            }
        ])
    }
    
            addDepartment = department => {
                fetch('http://localhost:3001/api/department', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(department)
                  });
                  startApp();
    },

    
    addRolePrompt = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the name of the role you would like to add?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the salary of this role?"
            },
            {
                type: "input",
                name: "department",
                message: "What is the name of the department of this role?"
            }
        ])
    }
    
    addRole = role => {
        fetch('http://localhost:3001/api/role', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(role)
          });
                startApp();
            }
    
    addEmployeePrompt = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the first name of the employee?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the last name of the employee?"
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the role ID of the employee?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the Manager's employee ID of this employee?"
            }
        ])
    }
    
    addEmployee = employee => {
        fetch('http://localhost:3001/api/employee', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee)
          });
          startApp();}
        
    
    updateEmployee = (id, role_id) => {
       fetch(`http://localhost:3001/api/employee/${id}`,{
           method: 'PUT',
           headers: { 'Content-Type':'application/json' },
           body: JSON.stringify(role_id)
       })
       startApp();
    }

    module.exports = startApp();