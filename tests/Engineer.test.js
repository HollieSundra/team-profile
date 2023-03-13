const { describe } = require('jest-circus');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and github properties', () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@test.com', 'johngithub');

            expect(engineer.name).toEqual('John Doe');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('johndoe@test.com');
            expect(engineer.github).toEqual('johngithub');
        });
    });

    describe('getGithub', () => {
        it('should return the engineer github', () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@test.com', 'johngithub');

            expect(engineer.getGithub()).toEqual('johngithub');
        });
    });

    describe('getRole', () => {
        it('should return "Engineer"', () => {
            const engineer = new Engineer('John Doe', 1, 'johndoe@test.com', 'johngithub');

            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});