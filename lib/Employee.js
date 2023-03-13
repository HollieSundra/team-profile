class Employee {
    constructor(name, id, email) {
        if (!name) {
            throw new Error("You must provide a name for the employee.");
          }
          if (!id) {
            throw new Error("You must provide an id for the employee.");
          }
          if (!email) {
            throw new Error("You must provide an email for the employee.");
          }

        this.name = name;
        this.id = id;
        this.email = email;
    }

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
        return 'Employee';
    }
}

module.exports = Employee;