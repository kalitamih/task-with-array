const assert = require('assert');
const reverseWords = require('./index.js');

describe('reverseWords', () => {
  it('normal test', () => {
    const array = reverseWords(['I',' ','L','o','v','e',' ','N','u','O','R','D','E','R','!']);
    assert.deepEqual(array, ['I',' ', 'e','v','o','L',' ','R','E','D','R','O','u','N','!']);
  });  
  it('normal test', () => {
    const array = reverseWords(['I',' ', 'e','v','o','L',' ','R','E','D','R','O','u','N','!']);
    assert.deepEqual(array, ['I',' ', 'L','o','v','e',' ','N','u','O','R','D','E','R','!']);
  }); 
  it('normal test', () => {
    const array = reverseWords(['T','e','s','t',' ','e','r','r','o','r',' ','m','e', 's', 's', 'a', 'g', 'e', '.', '.', '.']);
    assert.deepEqual(array, ['t','s','e','T',' ','r','o','r','r','e',' ','e','g','a','s','s','e','m','.','.','.']);
  });  
  it('normal test', () => {
    const array = reverseWords(['t','s','e','T',' ','r','o','r','r','e',' ','e','g','a','s','s','e','m','.','.','.']);
    assert.deepEqual(array, ['T','e','s','t',' ','e','r','r','o','r',' ','m','e', 's', 's', 'a', 'g', 'e', '.', '.', '.']);
  });
  it('empty array', () => {
    const array = reverseWords([]);
    assert.deepEqual(array, []);
  });  
  it('not array', () => {
    const array = 1;
    assert.throws(() => { reverseWords(array); }, /Argument isn't array/);
  });  
  it('not only chars', () => {
    const array = [1, 'ss'];
    assert.throws(() => { reverseWords(array); }, /Array consists of not only chars/);
  });
  it('array with empty string', () => {
    const array = [''];
    assert.throws(() => { reverseWords(array); }, /Array consists of not only chars/);
  });
});