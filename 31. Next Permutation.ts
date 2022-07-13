/*
 * @Description: 

  31. 下一个排列

 * @Author: ysh
 * @Date: 2022-07-13 21:53:01
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-13 22:59:26
 */

function nextPermutation(nums: number[]): void {
  const len = nums.length;
  let i = len - 2;
  // 从右到左，寻找第一个比右邻居小的数，记作 target
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = len - 1;
    // 从右到左，寻找第一个比 target 大的数，交换
    while (j > i && nums[i] >= nums[j]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  // 上述操作之后，[i + 1, len - 1]已经为降序，首尾交换
  let [left, right] = [i + 1, len - 1];
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
