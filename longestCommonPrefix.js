/**
 * @param {string[]} strs
 * @return {string}
 */

const strs1 = ["flower", "flow", "flight"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["aaa", "aa", "aaa"];
const strs4 = ["c", "acc", "ccc"];
const strs5 = ["a"];

var longestCommonPrefix = function (strs) {
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs4));
console.log(longestCommonPrefix(strs5));
