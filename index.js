// Load modules
// const Employee = require("./lib/Employee")
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
    let manager = "manager"
    employees.push(manager)
}

function engineer() {
    console.log("an engineer");
    let engineer = "engineer"
    employees.push(engineer)
}

function intern() {
    console.log("an intern");
    let intern = "intern"
    employees.push(intern)
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