const Employee = require("./Employee");

// Intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // arguments from the Employee class
        super(name, id, email);
        // arguments unique to the Intern class
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };
};

module.exports = Intern;