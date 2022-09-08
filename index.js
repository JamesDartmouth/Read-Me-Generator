// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  }, 
  {
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub username.',
  }, 
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
  }, 
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project?',
  }, 
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
  }, 
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide the instructions and examples for use.',
  }, 
  {
    type: 'input',
    name: 'credit',
    message: 'Please list any collaborators with links to their Github profile.',
  }, 
  {
    type: 'list',
    name: 'license',
    message: 'What license is used for your project?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    default: 'MIT',
  }, 
  {
    type: 'input',
    name: 'feature',
    message: 'Please list the features of your project.',
  }, 
  {
    type: 'input',
    name: 'contribute',
    message: 'Please provide any guidelines for other developers to contribute to your project.',
  }, 
  {
    type: 'input',
    name: 'test',
    message: 'Please provide any tests for your application and examples how to run them.',
  }, 

]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, 
  function(err){
    if(err){
        throw err;
    }
    console.log('README created!')
  });

};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init()
  .then(userInput => {
    return generateMarkdown(userInput);
  })
  .then(readmeInfo => {
    return writeToFile('./assets/readmefiles.README.md', readmeInfo);
  })
  .catch(err => {
    console.log(err);
  })

  