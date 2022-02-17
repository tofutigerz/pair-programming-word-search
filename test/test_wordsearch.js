const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');
  

describe("#wordSearch()", function() {

  it("should return false if the array is empty", function() {
    const result = wordSearch([[]]);
    assert.isFalse(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'S', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'E', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'N', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'F', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present horizontally but backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'S', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'E', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['W', 'H', 'F', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present vertically but backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'S', 'F', 'Q', 'D', 'A', 'L'],
      ['S', 'E', 'E', 'N', 'F', 'L', 'L', 'D'],
      ['Y', 'F', 'E', 'F', 'Q', 'E', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'F', 'E', 'S'],
      ['W', 'H', 'F', 'S', 'Y', 'N', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'I', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'E', 'A', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'S', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally top left to bottom right", function() {
    const result = wordSearch([
      ['S', 'W', 'S', 'F', 'Q', 'D', 'A', 'L'],
      ['S', 'E', 'E', 'N', 'F', 'L', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'E', 'A', 'L'],
      ['D', 'L', 'E', 'N', 'N', 'F', 'E', 'S'],
      ['W', 'H', 'F', 'S', 'F', 'N', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'E', 'L', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'S', 'A', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally top right to bottom left", function() {
    const result = wordSearch([
      ['S', 'W', 'S', 'F', 'Q', 'D', 'A', 'S'],
      ['S', 'A', 'E', 'N', 'F', 'L', 'A', 'S'],
      ['Y', 'F', 'I', 'F', 'Q', 'I', 'E', 'L'],
      ['D', 'L', 'E', 'N', 'N', 'I', 'E', 'S'],
      ['W', 'H', 'F', 'F', 'N', 'N', 'R', 'L'],
      ['B', 'F', 'E', 'F', 'N', 'E', 'Y', 'B'],
      ['U', 'L', 'E', 'W', 'A', 'E', 'L', 'I'],
      ['D', 'L', 'D', 'A', 'K', 'S', 'A', 'D'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally bottom right to top left", function() {
    const result = wordSearch([
      ['S', 'W', 'S', 'F', 'Q', 'D', 'A', 'L'],
      ['D', 'E', 'E', 'N', 'F', 'L', 'L', 'D'],
      ['Y', 'L', 'S', 'F', 'Q', 'E', 'A', 'L'],
      ['D', 'L', 'E', 'N', 'N', 'F', 'E', 'S'],
      ['W', 'H', 'F', 'F', 'F', 'N', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'I', 'L', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'S', 'E', 'D'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'S'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
  it("should return true if the word is present diagonally bottom left to top right ", function() {
    const result = wordSearch([
      ['S', 'W', 'S', 'F', 'Q', 'D', 'A', 'D'],
      ['S', 'A', 'E', 'N', 'F', 'L', 'L', 'S'],
      ['Y', 'F', 'I', 'F', 'Q', 'E', 'E', 'L'],
      ['D', 'L', 'E', 'N', 'F', 'I', 'E', 'S'],
      ['W', 'H', 'F', 'N', 'N', 'N', 'R', 'L'],
      ['B', 'F', 'I', 'F', 'N', 'E', 'Y', 'B'],
      ['U', 'E', 'O', 'W', 'A', 'E', 'L', 'I'],
      ['S', 'L', 'D', 'A', 'K', 'S', 'A', 'D'],
      ['D', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });
});
