const { describe } = require('jest-circus');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Intialization', () => {
        it('should create an object with a name, id, and email if provided valid arguments', () => {
            const employee = new Employee('John Doe', 1, 'johndoe@test.com');

            expect(employee.name).toEqual('John Doe');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('johndoe@test.com');
        });

        it('should throw an error if provided no arguments', () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });

        it('should throw an err if not provided a name', () => {
            const cb = () => new Employee(undefined, 1, 'johndoe@test.com');

            expect(cb).toThrow();
        });

        it('should throw an error if not provided an id', () => {
            const cb = () => new Employee('John Doe', undefined, 'johndoe@test.com');

            expect(cb).toThrow();
        });

        it('should throw an err if not provided an email', () => {
            const cb = () => new Employee('John Doe', 1, undefined);

            expect(cb).toThrow();
        });
    });

    describe('Methods', () => {
        it('should return the name when the getName() method is called', () => {
            const employee = new Employee('John Doe', 1, 'johndoe@test.com');

            expect(employee.getName()).toEqual('John Doe');
        });

        it('should return the id when the getId() method is called', () => {
            const employee = new Employee('John Doe', 1, 'johndoe@test.com');

            expect(employee.getId()).toEqual(1);
        });

        it('should return the email when the getEmail() method is called', () => {
            const employee = new Employee('John Doe', 1, 'johndoe@test.com');

            expect(employee.getEmail()).toEqual('johndoe@test.com');
        });

        it('should return "Employee" when the getRole() method is called', () => {
            const employee = new Employee('John Doe', 1, 'johndoe@test.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});