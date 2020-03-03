//class inherits from employee 
const Employee = require("./Employee");
//Writes code to define and export the engineer class.
class Engineer extends Employee {
  //constructor access name id and email with super. this.officeNumber creates officeNumber perameter.
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
// exports engineer perameters.
module.exports = Engineer;
