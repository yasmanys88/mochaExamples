// To get the Reporters - use the below code
// mocha test/ --reporter dot

var expect = require('chai').expect;

/* describe("Mathematical Operations - Test Suite", function(){
  beforeEach(function(done){
  this.timeout(500);
  setTimeout(done,3000);
}); */


describe('Mathematical Operations - Test Suite', function () {

    this.timeout(10000);

    var a = 10;
    var b = 10;

    it('Addition of two numbers', function (done) {
        expect(a + b).to.equal(20);
        setTimeout(done, 1000);
    });

    it('Subtraction of two numbers', function (done) {
        expect(a - b).to.equal(0);
        setTimeout(done, 2000);
    });

    it.skip('Multiplication of two numbers', function (done) {
        expect(a * b).to.equal(100);
        setTimeout(done, 1000);
    });

    it('Division of two numbers', function (done) {
        expect(a / b).to.equal(1);
        setTimeout(done, 2000);
    });

    it('This is a test for Pending Test Feature');

});