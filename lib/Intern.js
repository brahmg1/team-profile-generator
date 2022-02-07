//dependencies 
const Employee = require('./Employee.js');

//constructor class for Intern
class Intern extends Employee {
    constructor(name, id, email, school) {
        //extended from Employee
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;