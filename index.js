const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require('./src/template.js');


const teamMembers = [];

function runGenerator() {

function promptManager() {
    inquirer
     .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the manager name:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide a name for the employee.";
            //     }
            //     return true;
            // },
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the manager employee ID:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an ID for the employee.";
            //     }
            //     return true;
            // }
            
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the manager email address:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an email address for the employee.";
            //     }
            //     return true;
            // }
        },
        {
            type: 'input',
            name: 'office number',
            message: 'Enter the manager office number:',
        },
     ])
     .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager);
        promptCreateTeam();
     });

}

function promptEngineer() {
    inquirer
     .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer name:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an ID for the employee.";
            //     }
            //     return true;
            // }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer employee ID:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an ID for the employee.";
            //     }
            //     return true;
            // }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer email address:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an email address for the employee.";
            //     }
            //     return true;
            // }
        },
        {
            type: 'input',
            message: 'Enter the engineer Github username:',
            name: 'github',
        },
     ])
     .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(engineer);
        promptCreateTeam();
     });
}

function promptIntern() {
    inquirer
     .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern name:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an ID for the employee.";
            //     }
            //     return true;
            // }
            
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the inter employee ID:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an ID for the employee.";
            //     }
            //     return true;
            // }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the inter email address:',
            // validate: function (input) {
            //     if(input.trim() === "") {
            //         return "You must provide an email address for the employee.";
            //     }
            //     return true;
            // }
        },
        {
            type: 'input',
            message: 'Enter the inter school:',
            name: 'school',
        },
     ])
     .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(intern);
        promptCreateTeam();
     });
}

function promptCreateTeam() {
    inquirer
     .prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Select a team member to add:',
            choice: ['Engineer', 'Intern', 'Manager'],
        },
     ])
     .then((response) => {
        switch (response.memberType) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'Manager':
                promptManager();
                break;
            default :
                htmlCreater();
        }
     });
}


function htmlCreater() {
    console.log("Team Created!");

    fs.writeFileSync(outputPath, generateTeam(teamMembers), "UTF-8")
}

promptCreateTeam();

}

runGenerator();