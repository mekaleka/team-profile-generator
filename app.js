const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
//Created a variable called teammembers
const teamMembers = [];
//created a function navBar for the chooser options
function navBar() {
  console.log("Chooser Option");
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select choice",
        name: "menu",
        choices: ["Manager", "Engineer", "Intern", "Exit Application"]
      }
    ])
    .then(function(response) {
      switch (response.menu) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          exitApplication();
      }
    });
}
// Wrote code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Manager Name"
      },
      {
        type: "input",
        name: "id",
        message: "Enter Manager Id"
      },
      {
        type: "input",
        name: "email",
        message: "Enter Manager email"
      },
      {
        type: "input",
        name: "officeId",
        message: "Enter Manager Office Number"
      }
    ])
    .then(function(userResponse) {
      var manager = new Manager(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.officeId
      );
      teamMembers.push(manager);
      console.log(userResponse);
    });
}
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer Name"
      },
      {
        type: "input",
        name: "id",
        message: "Enter Engineer Id"
      },
      {
        type: "input",
        name: "email",
        message: "Enter Engineer email"
      },
      {
        type: "input",
        name: "github",
        message: "Enter Engineer GitHub Account"
      }
    ])
    .then(function(userResponse) {
      var engineer = new Engineer(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.github
      );
      teamMembers.push(engineer);
      console.log(userResponse);
    });
}
function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Intern Name"
      },
      {
        type: "input",
        name: "id",
        message: "Enter Intern Id"
      },
      {
        type: "input",
        name: "email",
        message: "Enter Intern email"
      },
      {
        type: "input",
        name: "school",
        message: "Enter Intern School"
      }
    ])
    .then(function(userResponse) {
      var intern = new Intern(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.school
      );
      teamMembers.push(intern);
      console.log(userResponse);
    });
}
function exitApplication() {

  //loop through team members array,depending on the role, will call display methods and call the html generator. Then use fs package to output to
  //the output file.
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
