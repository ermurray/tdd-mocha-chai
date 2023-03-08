const chai = require('chai');
const { numberOfVowels } = require('../src/vowels');

const { assert, expect } = chai;

describe('Given function numberOfVowels', () => {
  it('should return 3 when given word "orange" is used ', () => {
    const data = 'orange';
    const actual = numberOfVowels(data);

    expect(actual).to.equal(3);
  });

  it('if data is not a string return "bad Input: give me a string"', () => {
    const data = 2;
    const actual = numberOfVowels(data);
    const expectedOutput = 'bad Input: give me a string'

    assert.equal(actual, expectedOutput)
  });

  it('should return type number if valid input', () => {
    const data = 'orange';
    const actual = numberOfVowels(data);

    assert.typeOf(actual, 'number');
  });

  it('should return 0 if no vowels found', () => {
    const data = 'cccccc';
    const actual = numberOfVowels(data);

    assert.equal(actual, 0)
  });
});