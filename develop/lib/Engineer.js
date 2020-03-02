//Writes code to define and export the Engineer class. 

//Inherits class from Employee.
const Employee = require("./Employee");
//
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}
// 
module.exports = Engineer;
