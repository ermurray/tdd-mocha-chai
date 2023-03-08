// take string input
// output cout number of vowels

const numberOfVowels = function(data) {
  if (typeof data !== 'string') {
    return 'bad Input: give me a string';
  }

  let result = 0
  const vowels = ['a', 'e', 'i', 'o' ,'u'];

  const splitData = data.split('');

  splitData.forEach(char => {
    if (vowels.includes(char)) {
      result += 1;
    };
  })

  return result; 
};

module.exports = { numberOfVowels };