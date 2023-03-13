const { describe } = require('jest-circus');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create an object with name, id, email, and school properties', () => {
            const intern = new Intern('John Doe', 1, 'johndoe@test.com', 'university of Az');

            expect(intern.name).toEqual('John Doe');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('johndoe@test.com');
            expect(intern.school).toEqual('university of Az');
        });
    });

    describe('getSchool', () => {
        it('should return the intern school', () => {
            const intern = new Intern('John Doe', 1, 'johndoe@test.com', 'university of Az');

            expect(intern.getSchool()).toEqual('university of Az');
        });
    });

    describe('getRole', () => {
        it('should return "Intern"', () => {
            const intern = new Intern('John Doe', 1, 'johndoe@test.com', 'university of Az');

            expect(intern.getRole()).toEqual('Intern');
        });
    });
});