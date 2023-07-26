const numberOfVowels = function(data) {
  if(typeof data !== 'string') {
    return 'bad input';
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const splitData = data.split('');

  return splitData.reduce((acc, curr) => {
    if(vowels.includes(curr)) {
      return acc += 1
    }
    
    return acc
  }, 0);
};



module.exports = { numberOfVowels };