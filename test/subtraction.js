const sinon = require('sinon'),
  controller = require('../controllers/subtraction'),
  testdata = require('./testdata.json'),
  helperUtils = (require('../utils/controllerUtils')._chai = require('chai')),
  { expect } = _chai;
_chai.should();

describe('Subtraction TestCase', function () {
  beforeEach(function () {
    sinon.stub(helperUtils, 'getMinuend').returns(1234);
    sinon.stub(helperUtils, 'getSubtrahend').returns(123);
    sinon.stub(helperUtils, 'getOptions').returns([1111, 246, 150, 111]);
  });
  it('should return valid response with statusCode 200', function () {
    let res = {
      result: '',
      status: function (s) {
        this.statusCode = s;
        return this;
      },
      send: function (result) {
        this.result = result;
      }
    };
    controller.subtraction(testdata['testcase'][0], res);
    expect(res.statusCode.toString()).to.equal('200');
    expect(res.result).to.be.an.instanceof(Object);
  });
  afterEach(function () {
    sinon.restore();
  });
});
