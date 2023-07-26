const chai = require('chai');
const { numberOfVowels } = require('../src/vowels');

const { assert, expect } = chai;

describe('Given the Function numberOfVowels', () => {
  it('should return 3 when given the word "orange"', () => {
    const data = 'orange';
    const actual = numberOfVowels(data);

    expect(actual).to.equal(3);
  });

  it('should return "bad input" if data is not a string', () =>{
    const data = 2;
    const actual = numberOfVowels(data);
    const expectedOutput = 'bad input';

    assert.equal(actual, expectedOutput);
  });

  it('should return type number if a valid input', () => {
    const data = 'apple';
    const actual = numberOfVowels(data);

    assert.typeOf(actual, 'number');
  });

  it('should return 0 if no vowels are found', () => {
    const data = 'ccccc'
    const actual = numberOfVowels(data);

    assert.equal(actual, 0);
  });
});