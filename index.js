const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    //Title of my project - this should be input
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'titleSelect',
    },
    //Sections

    //Description - this should be input
    {
        type: 'input',
        message: 'Write a description for your project',
        name: 'descSelect',
    },
    //Table of contents - research this 

    //Installation
    {
        type: 'input',
        message: 'How do you install this package?',
        name: 'instSelect',
    },
    //Usage
    {
        type: 'input',
        message: 'How do you use this package?',
        name: 'useSelect',
    },
    //license - checkbox
    {
        type: 'list',
        message: 'What liscense does this use?',
        name: 'liscSelect',
        choices: ['GNU AGPLv3', 'GNU GPLv3',
            'GNU LGPLv3', 'Mozilla Public License 2.0',
            'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
            'The Unlicense'],
    }

        Contributing

        Tests

        Questions
])
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

