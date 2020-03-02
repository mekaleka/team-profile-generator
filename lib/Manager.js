//Writes code to define and export the Manager class.

//Inherits from Employee.
const Employee = require("./Employee");

//Manager class extends to employee.js
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
//
module.exports = Manager;
