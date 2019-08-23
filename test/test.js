var randomNames = require('../index');
var expect = require('chai').expect;

describe('Testing the single function', function() {
    describe('Testing incorrect input', function() {
        describe('Testing incorrect input value', function() {
            it('should throw an error' , function() {
                expect(function() {
                    randomNames.single('INCORRECTVALUE');
                }).to.throw(RangeError);
            });
        });
    });
    describe('Testing correct input', function() {
        describe('Testing correct input default', function() {
            it('should return a random name' , function() {
                expect(randomNames.single()).to.be.a('string');
            });
        });
        describe('Testing correct input MALE', function() {
            it('should return a random Male name' , function() {
                expect(randomNames.single('MALE')).to.be.a('string');
            });
        });
        describe('Testing correct input FEMALE', function() {
            it('should return a random Female name' , function() {
                expect(randomNames.single('FEMALE')).to.be.a('string');
            });
        });
    });
});

describe('Testing the list function', function() {
    describe('Testing incorrect input', function() {
        describe('Testing missing param', function() {
            it('should throw an error', function() {
                expect(function() {
                    randomNames.list();
                }).to.throw(ReferenceError);
            });
        });
        describe('Testing param type', function() {
            it('should throw an error', function() {
                expect(function() {
                    randomNames.list('5');
                }).to.throw(TypeError);
            });
        });
        describe('Testing param length', function() {
            it('should throw an error', function() {
                expect(function() {
                    randomNames.list(-1);
                }).to.throw(RangeError);
            });
        });
        describe('Testing param length', function() {
            it('should throw an error', function() {
                expect(function() {
                    randomNames.list(400);
                }).to.throw(RangeError);
            });
        });
    });
    describe('Testing correct input', function() {
        describe('Testing valid param', function() {
            it('should return 5 items', function() {
                expect(randomNames.list(5)).to.be.an('array');
            });
        });
    });
});
