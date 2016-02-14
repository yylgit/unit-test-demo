var test = require('../src/add.js'),
	expect = require('chai').expect;
describe("Test",function(){
	it('add(1,2) should equal 3',function(){
		expect(test.add(1,2)).to.equal(3);
	})
})