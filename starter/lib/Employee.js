// TODO: Write code to define and export the Employee class
/* The first class is an Employee parent class with the following properties and methods:
name,id,email,getName(),getId(),getEmail(),getRole() —returns 'Employee'
The other three classes will extend Employee. */


// class Employee {
//     constructor(name, id, email) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.title = "Employee";
//     }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Employee;
