
const myFunc = (arg) => {
  const localVar = 2;
  if(arg) {
    return true
  }
  
  return localVar;
};

// console.log("I assert that this will return true", myFunc('hello'));


const sumTwoNumber = (num1, num2) => {
  return num1 +num2;
};

// console.assert(sumTwoNumber(1,2) !== 3)

module.exports = { sumTwoNumber, myFunc };