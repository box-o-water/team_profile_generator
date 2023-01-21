const Employee = require("./Employee");

// Engineer constructor
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // arguments from the Employee class
    super(name, id, email);
    // arguments unique to the Engineer class
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
