/**
 * @param {string} s
 * @return {number}
 */

const s1 = "III";
const s2 = "LVIII";
const s3 = "MCMXCIV";

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

var romanToInt = function (s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] === Object.keys(roman)[0] &&
        (s[i + 1] === Object.keys(roman)[1] ||
          s[i + 1] === Object.keys(roman)[2])) ||
      (s[i] === Object.keys(roman)[2] &&
        (s[i + 1] === Object.keys(roman)[3] ||
          s[i + 1] === Object.keys(roman)[4])) ||
      (s[i] === Object.keys(roman)[4] &&
        (s[i + 1] === Object.keys(roman)[5] ||
          s[i + 1] === Object.keys(roman)[6]))
    ) {
      answer += roman[s[i] + s[i + 1]];
      i++;
    } else {
      answer += roman[s[i]];
    }
  }
  return answer;
};

console.log(romanToInt(s1));
console.log(romanToInt(s2));
console.log(romanToInt(s3));
