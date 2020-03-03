//class inherits from employee
const Employee = require("./Employee");
//Writes code to define and export the Intern class.  
class Intern extends Employee {
  //constructor access name id and email with super. this.officeNumber creates officeNumber perameter.
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}
// exports intern perameters. 
module.exports = Intern;
