/**
 * @param {number} x
 * @return {boolean}
 */

let x1 = 121;
let x2 = -121;
var isPalindrome = function(x) {
  let temp1 = '';
  let temp2 = '';
  console.log(x.toString());
  temp1 = x.toString();
  for (let i = temp1.length; i > 0; i--) {
    temp2 += temp1[i-1];
  }
  if (temp1 === temp2) {
    return true;
  } else {
    return false;
  }
};

isPalindrome(x1);
isPalindrome(x2);