// Load modules
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require('inquirer');
const fs = require('fs');

const makeThing = require('./htmlwriter');

let employees = [];

function manager() {
    console.log("a manager");

    inquirer
    .prompt([
        {
            type: "input",
            message: "Name:",
            name: "name",
            default: "Sue" // remove when ready
        },
        {
            type: "input",
            message: "Employee ID:",
            name: "id",
            default: 1 // remove when ready
        },
        {
            type: "input",
            message: "Email address:",
            name: "email",
            default: "sue@work.com" // remove when ready
        },
        {
            type: "input",
            message: "Office number:",
            name: "office",
            default: "1a" // remove when ready
        },
    ])
    .then(function (userInput) {
        let manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.office);
        employees.push(manager)
        console.log(employees);
        team()
    });
}

function team() {

    inquirer
    .prompt([
        {
            type: "list",
            message: "Select employee type:",
            name: "empType",
            choices: ["Engineer", "Intern"],
            default: "Engineer"
        },
    ])
    .then(function (userInput) {
        switch(userInput.empType) {
            case "Manager":
                manager();
                break;
            case "Engineer":
                engineer();
                break;
            default:
                intern();
        }
    });
}

function engineer() {
    console.log("an engineer");

    inquirer
    .prompt([
        {
            type: "input",
            message: "Name:",
            name: "name",
            default: "Bob" // remove when ready
        },
        {
            type: "input",
            message: "Employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Github profile:",
            name: "github"
        },
    ])
    .then(function (userInput) {
        let engineer = new Engineer(userInput.name, userInput.id, userInput.email, userInput.github);
        employees.push(engineer)
        console.log(employees);
        anotherOne()
    });
}

function intern() {
    console.log("an intern");

    inquirer
    .prompt([
        {
            type: "input",
            message: "Name:",
            name: "name"
        },
        {
            type: "input",
            message: "Employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Email address:",
            name: "email"
        },
        {
            type: "input",
            message: "School:",
            name: "school"
        },
    ])
    .then(function (userInput) {
        let intern = new Intern(userInput.name, userInput.id, userInput.email, userInput.school);
        employees.push(intern)
        console.log(employees);
        anotherOne()
    });
}

function anotherOne() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Do you want to enter another employee?",
            name: "another",
            choices: ["yes", "no"],
            default: "no" // remove when ready
        },
    ])
    .then(function (userInput) {
        if (userInput.another == "yes") {
            team()
        } else {
            console.log(employees);
            console.log("thanks for playing");
            createHTML(employees);
        }
    }); 
}

function createHTML() {

    const filename = `dist/index.html`;

    fs.writeFile(filename, makeThing(employees), (err) =>
        err ? console.log(err) : console.log('Success!')
    );

};

manager()
