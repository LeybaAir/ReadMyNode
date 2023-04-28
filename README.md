# READMYNODE
When starting an open source project on GitHub, it's essential to have a comprehensive and informative README document to provide users with information about the application. The README should outline the app's purpose, usage instructions, installation guidelines, issue reporting procedures, and contribution guidelines. A well-structured README increases the likelihood of other developers contributing to the project's success.

To save time and focus on developing the project, a command-line application can be used to generate a README file quickly and easily. By using the Inquirer package, you can create a dynamic and professional README file that caters to the user's input. To ensure that the README meets the expected quality, it's advisable to consult the Good README Guide.

You can run the application by executing the following command:

node index.js

# DESCRIPTION
As A developer I WANT a README generator, SO THAT I can quickly create a professional README for a new project.

# INSTRUCTIONS
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title

THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

WHEN I choose a license for my application from a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README

# Requirements
This homework is graded based on the following criteria:

Deliverables: 20%


A sample README generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 27%


A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.
The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

Technical Acceptance Criteria: 40%

Uses the Inquirer package.

Repository Quality: 13%


Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to walkthrough video.

# NOTES
