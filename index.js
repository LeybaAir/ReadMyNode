// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'project title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'entitled description',
        message: 'Give a brief description of your project?',
      },
      {
        type: 'input',
        name: 'license type',
        message: 'Choose a license type.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
      },
      {
        type: 'input',
        name: 'email address',
        message: 'Enter your Email.',
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, pageContent) {
  fs.writeFile(fileName, pageContent, (err)=>
  err ? console.log(err) : console.log('successfully created markdown file')
  );
};

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((answers) => {
    const markdownContent = generateMarkdown(answers);

    writeToFile('readme.md', markdownContent)
  });
};

// Function call to initialize app
init();
