//requires each file/employee to the respective file. 
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
  //prompts for user to select an employee.
    .prompt([
      {
        type: "list",
        message: "Select choice",
        name: "menu",
        choices: ["Manager", "Engineer", "Intern", "Exit Application"]
      }
    ])
    //logs and returns the users response.
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
//calls the prompt based on the choosers option.
navBar();
// Wrote code to use inquirer to gather information about the manager team member,
// and to create objects for manager.
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
      //logs and returns the users response.
    .then(function(userResponse) {
      var manager = new Manager(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.officeId
      );
      teamMembers.push(manager);
      console.log(userResponse);
      //calls the addmanager function.
      navBar();
    });
}
// Wrote code to use inquirer to gather information about the engineer team member,
// and to create objects for engineer.
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
    //logs and returns the users response.
    .then(function(userResponse) {
      var engineer = new Engineer(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.github
      );
      teamMembers.push(engineer);
      console.log(userResponse);
      //calls the addEngineer function.
      navBar();
    });
}
// Wrote code to use inquirer to gather information about the manager team intern,
// and to create objects for intern.
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
    //logs and returns the users response.
    .then(function(userResponse) {
      var intern = new Intern(
        userResponse.name,
        userResponse.id,
        userResponse.email,
        userResponse.school
      );
      teamMembers.push(intern);
      console.log(userResponse);
      //calls addIntern.
      navBar();
    });
}
//The `render` function generates and returns a block of HTML to the team.html including templated divs for each employee!
function exitApplication() {
  var page = render(teamMembers);
  fs.writeFile("./output/team.html", page, () => {});
  console.log(page);
}
