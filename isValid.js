/**
 * @param {string} s
 * @return {boolean}
 */

const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";
const s4 = "(])[";

const bracket = {
  "(": ")",
  "{": "}",
  "[": "]",
};

var isValid = function (s) {
  // 문자열의 길이가 짝수가 아닐 경우
  if (s.length % 2 === 1) {
    return false; 
  }
  // 문자열의 시작이 닫는 괄호 일 경우
  if (Object.values(bracket).includes(s[0])) {
    return false;
  }
  // 문자열의 시작이 여는 괄호 일 경우
  if (Object.keys(bracket).includes(s[s.length - 1])) {
    return false;
  }
  // stack 생성
  let stack = [];

  for (let i = 0 ; i < s.length; i++) {
    if (Object.keys(bracket).includes(s[i])) {
      stack.push(s[i]);
    } else if (bracket[stack.pop()] !== s[i]) {
      return false
    }
  }

  return true;
};

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
