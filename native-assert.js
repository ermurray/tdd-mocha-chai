// const assert = require('assert').strict;

// assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

const sayHello = (name) => {
  return `Hello, ${name}`
}


console.assert( sayHello("Eric") === 'Hello, Eric!');