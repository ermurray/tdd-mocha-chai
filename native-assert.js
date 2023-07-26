const assert = require('assert').strict
const { sumTwoNumber, myFunc } = require('./review'); 

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);


console.log(sumTwoNumber(1,2));
console.log(myFunc());

assert.equal(sumTwoNumber(1,2), 2);