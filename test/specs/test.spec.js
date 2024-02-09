const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;
const testData = require('./data/testData.json');
const { TotalSum } = require('../src/app');
const databaseConfig = require('../src/database');

describe('Test Task', function () {
  it('Test with Assert', function () {
    const total = TotalSume(testData.products);
    assert.equal(total, 60);
  });

  it('Test with Should', function () {
    databaseConfig.username.should.equal('user');
    databaseConfig.password.should.equal('password');
    databaseConfig.database.should.equal('my_database');
  });

  it('Test with Expect', function () {
    const total = TotalSum(testData.products);
    expect(total).to.equal(60);
  });
});
