var expect = require('chai').expect;
var assert = require('chai').assert;

const bowlingmodule = require('../../bowlingmodule');

describe('bowlingmodule()', function() {
  it('calculate the total score of the game given correct array', function() {
    // 1. ARRANGE
    var scoreArray1 = [10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 9, 4];

    var result1 = 265;

    const getSum = (total, num) => {
      return total + num;
    };

    // 2. ACT
    var result = bowlingmodule.calculateScore(scoreArray1);

    var result2 = result.reduce(getSum);

    // 3. ASSERT
    expect(result1).to.be.equal(result2);
  });

  it('it gives an error when given wrong data', function() {
    // 1. ARRANGE
    var scoreArray6 = ['a', 'b', 'c', 'd'];

    // 2. ACT
    var fn = bowlingmodule;

    //var result7 = result6.reduce(getSum);

    // 3. ASSERT
    //assert.throws(fn, errorInstance);
    //  expect(fn).to.throw(Error, 'error in data');
    expect(() => fn.calculateScore(scoreArray6)).to.throw();
  });
});
