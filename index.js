//Global variables to be used throughout
const fs = require("fs");
//Comes with starter code - haven't used
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
//comes with starter code - haven't used
// const { type } = require("os");

const questions = [
    //Title of my project - this should be input
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    //Sections

    //Description - this should be input
    {
        type: 'input',
        message: 'Write a description for your project',
        name: 'description',
    },
    //Table of contents - research this 

    //Installation
    {
        type: 'input',
        message: 'How do you install this package?',
        name: 'installation',
    },
    //Usage
    {
        type: 'input',
        message: 'How do you use this package?',
        name: 'usage',
    },
    //license - list
    {
        type: 'list',
        message: 'What license does this use?',
        name: 'license',
        choices: ['Mozilla Public License 2.0',
            'Apache License 2.0', 'MIT License',
            'The Unlicense', 'No License'],
    },

    //Contributing - confirm
    {
        type: 'confirm',
        message: 'Do you want to allow additional contributers?',
        name: 'contributing',
    },
    {
        type: 'input',
        Message: 'explain how other developers can contribute to your project.',
        name: 'confirmContribution',
        when: ({ contributing }) => {
            if (contributing) {
                return true;
            } else {
                return false;
            }
        }
    },
    //Tests - confirm
    {
        type: 'confirm',
        message: 'Can you test this app?',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Explain how users can test your app',
        name: 'testing',
        when: ({ testing }) => {
            if (testing) {
                return true;
            } else {
                return false
            }
        }
    },
    //Questions - input
    {
        type: 'input',
        message: 'Input some instructions to help people contact you for questions',
        name: 'questions',
    },
    //Github username - to be inserted in questions
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },

    //Email - to be inserted in questions
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',

    },
]; //end of question array

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            //throw statement trhows a user-defined excpetion.
            throw err;
        console.log('Well done! Your info has been transferred to the README!')
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md", generateMarkdown(userInput))
        });
};

// function call to initialize program
init();

