const Employee = require("./Employee");

// Manager constructor
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // arguments from the Employee class
    super(name, id, email);
    // arguments unique to the Manager class
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
