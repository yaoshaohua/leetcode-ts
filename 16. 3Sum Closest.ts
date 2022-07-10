/*
 * @Description: 

  16. 最接近的三数之和

  给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
  返回这三个数的和。
  假定每组输入只存在恰好一个解。

  输入：nums = [-1,2,1,-4], target = 1
  输出：2
  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

 * @Author: ysh
 * @Date: 2022-07-11 07:34:35
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-11 07:34:41
 */

function threeSumClosest(nums: number[], target: number): number {
  let ans = Infinity;
  const len = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      let tempSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(tempSum - target) < Math.abs(ans - target)) {
        ans = tempSum;
      }
      if (tempSum < target) {
        left++;
      } else if (tempSum > target) {
        right--;
      } else {
        return tempSum;
      }
    }
  }
  return ans;
}
