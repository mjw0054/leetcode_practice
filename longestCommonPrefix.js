/**
 * @param {string[]} strs
 * @return {string}
 */

const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["aaa", "aa", "aaa"];
const strs4 = ["c","acc","ccc"];
const strs5 = ["a"];
var longestCommonPrefix = function (strs) {
  let answer = "";
  let cmpStr = [];
  let j = 0;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i][j] !== undefined) {
      cmpStr += strs[i][j];
      console.log("1 : ", i, cmpStr);
      if (i === strs.length - 1) {
        if (cmpStr.length === 1) {
          answer = cmpStr;
        }}
        for (let k = 0; k < cmpStr.length-1; k++) {
          if (cmpStr[k] === cmpStr[k+1]) {
            console.log("2 : ", cmpStr);
            if (k === cmpStr.length - 2) {
              answer += cmpStr[0];
              console.log("answer : ", answer);
              cmpStr = [];
              i = -1;
              j++;
            }
          }
        }
      }
    } else {
      break;
    }
  }

  return answer;
};

// console.log(longestCommonPrefix(strs1));
// console.log(longestCommonPrefix(strs2));
// console.log(longestCommonPrefix(strs3));
// console.log(longestCommonPrefix(strs4));
console.log(longestCommonPrefix(strs5));
