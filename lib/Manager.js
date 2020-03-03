//Inherits from Employee.
const Employee = require("./Employee");
//Writes code to define and export the Intern class.
class Manager extends Employee {
  //constructor access name id and email with super. this.officeNumber creates officeNumber perameter. 
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
// exports manager perameters. 
module.exports = Manager;
