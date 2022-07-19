/*
 * @Description:

  53. 最大子数组和

  子数组 是数组中的一个连续部分。
  
 * @Author: ysh
 * @Date: 2022-07-20 06:45:36
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-20 06:57:50
 */

function maxSubArray(nums: number[]): number {
  let curAns = 0,
    maxAns = nums[0];
  for (let i = 0; i < nums.length; i++) {
    curAns = Math.max(curAns + nums[i], nums[i]);
    maxAns = Math.max(curAns, maxAns);
  }
  return maxAns;
}
