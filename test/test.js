const assert = require('assert');
const chai = require('chai')
const expect = chai.expect;
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

describe('test number2', function(){
    const testConst1 = 'string'
    const testConst2 = 2

    it('except const to be a string', function(){
        expect(testConst1).to.be.a('string')
    });
    // it('except const to be a string', function(){
    //     expect(testConst2).to.be.a('string')
    // })
})