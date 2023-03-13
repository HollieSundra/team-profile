const { describe } = require('jest-circus');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and officeNumber properties', () => {
            const manager = new Manager('John Doe', 1, 'john@test.com', 'Office A');

            expect(manager.name).toEqual('John Doe');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('john@test.com');
            expect(manager.officeNumber).toEqual('Office A');
        });
    });

    describe('getOfficeNumber', () => {
        it('should return the manager office number', () => {
            const manager = new Manager('Johe Doe', 1, 'john@test.com', 'Office A');

            expect(manager.getOfficeNumber()).toEqual('Office A');
        });
    });

    describe('getRole', () => {
        it('should return "Manager"', () => {
            const manager = new Manager('John Doe', 1, 'john@test.com', 'Office A');

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});