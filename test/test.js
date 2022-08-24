// const assert = require('assert');
const chai = require('chai');
const { numberOfVowels } = require('../src/vowels');

const { assert, expect } = chai;


describe('Given function numberofVowels', () =>{
  xit('should return 3 when given the word "orange" is used', () => {
    const data = 'orange';
    const actual = numberOfVowels(data);
    
    expect(actual).to.deepEqual(3);
  });

  it('if data is not a string return "bad input, expected string"', () => {
    const data = 2;
    const actual = numberOfVowels(data);

    assert.equal(actual, 'bad input, expected string')
  });

  it('should return type number if valid input', () => {
    const data = 'orange';
    const actual = numberOfVowels(data);

    assert.typeOf(actual, 'number');
  })

  it('should return 0 if no vowels found', () => {
    const data = 'ccccc';
    const actual = numberOfVowels(data);

    assert.equal(actual, 0)
  });
});