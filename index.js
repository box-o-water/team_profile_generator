// Load modules
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require('inquirer');
const fs = require('fs');

// const htmlwriter = require('./htmlwriter');
// const writeHTML = require('./htmlwriter');

let employees = [];

function buildTeam() {

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
            type: "list",
            message: "Select employee type:",
            name: "empType",
            choices: ["Manager", "Engineer", "Intern"],
        },
    ])
    .then(function (input) {
        switch(input.empType) {
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

function manager() {
    console.log("a manager");

    inquirer
    .prompt([
        {
            type: "input",
            message: "Office number:",
            name: "office"
        },
    ])
    .then(function (input) {
        let manager = "manager"
        employees.push(manager)
        console.log(employees);
        anotherOne()
    });
}

function engineer() {
    console.log("an engineer");

    inquirer
    .prompt([
        {
            type: "input",
            message: "Github profile:",
            name: "github"
        },
    ])
    .then(function (input) {
        let engineer = "engineer"
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
            message: "School:",
            name: "school"
        },
    ])
    .then(function (input) {
        let intern = "intern"
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
            choices: ["yes", "no"]
        },
    ])
    .then(function (input) {
        // TODO
        if (input.another == "yes") {
            buildTeam()
        } else {
            console.log(employees);
            console.log("thanks for playing");
        }
    }); 
}

buildTeam()


        // fs.writeFile(filename, writeHTML(data), (err) =>
        // err ? console.log(err) : console.log('Success!')
        // );
    // });
        // {
        // type: 'input',
        // message: 'Employee ID.',
        // name: 'title'
        // },
        // {
        //     type: 'input',
        //     message: 'Email address.',
        //     name: 'email'
        // },
        // {
        //     type: 'input',
        //     message: 'Office number.',
        //     name: 'office'
        // },
        // {
        //     type: 'list',
        //     message: 'Employee type.',
        //     choices: ["engineer", "intern"],
        //     name: 'type'
        // },

// allthethings.push(data)
// console.log(JSON.stringify(allthethings))
// const filename = `dist/index.json`;

// // instead of writing it to a json file, write it to html
// // const filename = `dist/index.html`;

// fs.writeFile(filename, JSON.stringify(allthethings, null, '\t'), (err) =>
// err ? console.log(err) : console.log('Success!')