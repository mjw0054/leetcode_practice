/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const number1 = [1, 2, 3];
const target1 = 5;

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(number1, target1));
