/*
977 Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  let squaredArray = new Array(nums.length).fill(0)
  let left = 0;
  let right = nums.length - 1
  for (let i = squaredArray.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      squaredArray[i] = nums[right] ** 2
      right--
    } else {
      squaredArray[i] = nums[left] ** 2
      left++
    }
  }
  return squaredArray
};