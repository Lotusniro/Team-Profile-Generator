// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
/* Manager will also have the following:officeNumber,getRole()—overridden to return 'Manager' */
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber;
    }

    //overridden "manager"
    getRole(){ return 'Manager'; }
    getOfficeNumber(){ return this.officeNumber;}
}


module.exports = Manager;

