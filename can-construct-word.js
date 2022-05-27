// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  /**
   * take 2 strings word and letters
   * return true if word can be built with letters
   * frequency counter (only lower case letters, no spaces, or punctuations)
   */


  let freqWord = freqCounter(word);
  let freqLetters = freqCounter(letters);


  if (letters.length === 0) {
    return false;
  }

  for (let char of word) {
    if ( freqLetters[char] !== freqWord[char] ) {
      return false;
    }
  }

  return true;
}

function freqCounter(string) {
  let freqCounter = {};
  for (let char of string) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }
  return freqCounter;
}
