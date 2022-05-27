"use strict";

/**count the frequency */

function freqCounter(string) {
  let freqCounter = {};
  for (let char of string) {
    if (freqCounter[char] === undefined) {
      freqCounter[char] = 1;
    } else {
      freqCounter[char] += 1;
    }
  }
  return freqCounter;
}

/**
   * take 2 strings word and letters
   * return true if word can be built with letters
   * frequency counter (only lower case letters, no spaces, or punctuations)
   */

function canConstructWord(word, letters) {


  let freqWord = freqCounter(word);// sj, sjj
  let freqLetters = freqCounter(letters);


  if (letters.length === 0) {
    return false;
  }

  for (let char of word) {
    if (freqLetters[char] < freqWord[char]) {
      return false;
    }
  }

  return true;
}


