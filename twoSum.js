const number = [1,2,3];
const target = 5;


var twoSum = function(nums, target) {
  for (let num1 of nums) {
    for (let num2 of nums) {
      if (target === num1 + num2) {
        return console.log(num1, num2)
      }
    }
  }
};

twoSum(number,target);