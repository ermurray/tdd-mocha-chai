const numberOfVowels = function(data) {
  if(typeof data !== 'string') {
    return 'bad input, expected string';
  }

  let result = 0;
  vowels = ['a', 'e', 'i', 'o' ,'u'];
  const splitData = data.split('');

    splitData.forEach((char) => {
      if (vowels.includes(char)) {
        result += 1
      }
    }); 

  return result
}



module.exports = { numberOfVowels };