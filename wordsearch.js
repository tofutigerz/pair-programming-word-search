const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
    l = l.split("").reverse().join("");
    // console.log(l);
    if (l.includes(word)) return true;
  }
  // console.log("horizontalJoin", horizontalJoin);
  const copyArr = [];
  for (let x = 0; x < letters[0].length; x++) {
    copyArr.push([letters[0][x]]); //
  }
  for (let i = 1; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      copyArr[j].push(letters[i][j]);
    }
  }
  // console.log("copyArr", copyArr);

  const verticalJoin = copyArr.map(ls =>  ls.join(''));

  // console.log("vericalJoin", verticalJoin);
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
    l = l.split("").reverse().join("");
    // console.log(l);
    if (l.includes(word)) return true;
  }

  const checkDiagonalTLBR = function(letters) {
    const diagonalTLBR = [];
    for (let i = 0; i < letters[0].length; i++) {
      let x = 0;
      let y = i;
      const arr = [];
      while (x < letters.length && y < letters[0].length) {
        arr.push(letters[x][y]);
        x++;
        y++;
      }
      diagonalTLBR.push(arr.join(""));
      if (arr.join("").includes(word)) return true;
      if (arr.reverse().join("").includes(word)) return true;
    }
    for (let i = 0; i < letters[0].length; i++) {
      let x = 0;
      let y = i;
      const arr = [];
      while (x < letters.length && y >= 0) {
        arr.push(letters[x][y]);
        x++;
        y--;
      }
      diagonalTLBR.push(arr.join(""));
      if (arr.join("").includes(word)) return true;
      if (arr.reverse().join("").includes(word)) return true;
    }
    for (let i = 0; i < letters.length; i++) {
      let x = i;
      let y = 0;
      const arr = [];
      while (x < letters.length && y < letters[0].length) {
        arr.push(letters[x][y]);
        x++;
        y++;
      }
      diagonalTLBR.push(arr.join(""));
      if (arr.join("").includes(word)) return true;
      if (arr.reverse().join("").includes(word)) return true;
    }
    for (let i = 0; i < letters.length; i++) {
      let x = i;
      let y = letters[0].length;
      const arr = [];
      while (x < letters.length && y >= 0) {
        arr.push(letters[x][y]);
        x++;
        y--;
      }
      diagonalTLBR.push(arr.join(""));
      if (arr.join("").includes(word)) return true;
      if (arr.reverse().join("").includes(word)) return true;
    }
    console.log(diagonalTLBR);
  }
  // console.log(copyArr);
  // console.log(checkDiagonalTLBR(copyArr));
  if (checkDiagonalTLBR(letters)) return true;
  // if (checkDiagonalTLBR(copyArr)) return true;
  return false;
};
module.exports = wordSearch;

// [[A],[W],[C],[F],[Q],[U],[A],[L]]

// const sampleInput = [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'E', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ]
// console.log(wordSearch(sampleInput, "SEINFELD"));
//   horizontalJoin = ['AWCFQUAFL', 'SEINFELD'...]