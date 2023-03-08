// function(export, module, _filname, _dirname) {

// }



const myFunc = (arg) => {
  const localvar = 2;
  if (arg) {
    return true
  }
  return localvar;
}

const arr1 =  [1, 2, 3];
const arr2 = arr1.slice(0);
const arr3 = [...arr1]

// console.log('arr1', arr1);

// arr1.push(2);

// console.log('arr1 after push:', arr1);

// console.log('arr2', arr2);

// console.log('arr3', arr3);


function sumTwoNumbers(num1,num2) {
  return num1 + num2
}

module.exports = { sumTwoNumbers }
