module.exports = function reverseWords(arr) {
  if(!Array.isArray(arr)) throw new Error('Argument isn\'t array');

  if(arr.filter(item => item.length === 1).length !== arr.length) {
    throw new Error('Array consists of not only chars');
  }

  const string = arr.join(''); // Convert array in one string
  const arrWords = string.split(' '); // Convert string into array of words 
  const arrLetters = arrWords.map(item => item.match(/[\w-А-Яа-я]+/g)); // Array words without signs. 
  const arrSigns = arrWords.map(item => item.match(/[^\w-А-Яа-я]+/g)); // Array only sign. I don't reverse signs(!,.?)
  const arrLettersNoNull = arrLetters.map(item => {
    if (item) return item; return '';
  }); // Replace possible nulls with empty strings
  const arrSignsNoNull = arrSigns.map(item => {
    if (item) return item; return '';
  }); // Replace possible nulls with empty strings
  
  const arrReversedWords = arrLettersNoNull.map((item, index) => 
    item.toString().split('').reverse().join('') + arrSignsNoNull[index]
  ); //Reverse letters and don't touch signs
  
  return arrReversedWords.join(' ').split(''); // return result like array of letters and signs
}



