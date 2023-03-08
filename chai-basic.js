const { expect, assert } = require('chai')

const foo = 'foo';
// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);

// expect([[[1, 2, 3]], 4, 5]).to.deep.equal([[[1, 2, 3]], 4, 5]);

expect(foo).to.equal('bar');   
