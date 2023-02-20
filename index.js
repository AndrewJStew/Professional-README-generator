const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");

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
        choices: ['Mozilla Public License 2.0',
            'Apache License 2.0', 'MIT License',
            'The Unlicense', 'No License'],
    },

    //Contributing
    {
        type: 'confirm',
        message: 'Do you want to allow additional contributers?',
        name: 'contrSelect',
    },
    {
        type: 'input',
        Message: 'explain how other developers can contribute to your project.',
        name: 'confirmCont',
        when: ({ contrSelect }) => {
            if (contrSelect) {
                return true;
            } else {
                return false;
            }
        }
    },
    //Tests
    {
        type: 'confirm',
        message: 'Can you test this app?',
        name: 'testConfirm',
    },
    {
        type: 'input',
        message: 'Explain how users can test your app',
        name: 'testing',
        when: ({ testConfirm }) => {
            if (testConfirm) {
                return true;
            } else {
                return false
            }
        }
    },
    //Questions
    {
        type: 'input',
        message: 'Input some instructions to help people contact you for questions',
        name: 'questions',
    }
]; //end of question array

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
            return console.log('I\'m afraid there is an error. Try again.')
        }
    })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

