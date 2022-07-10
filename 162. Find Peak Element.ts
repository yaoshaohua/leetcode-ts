/*
 * @Description: 

  162. 寻找峰值
  峰值元素是指其值严格大于左右相邻值的元素。
  给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。
  你可以假设 nums[-1] = nums[n] = -∞ 。
  你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

  输入：nums = [1,2,1,3,5,6,4]
  输出：1 或 5 
  解释：你的函数可以返回索引 1，其峰值元素为 2；
       或者返回索引 5， 其峰值元素为 6。

 * @Author: ysh
 * @Date: 2022-07-10 07:15:18
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-10 07:16:04
 */

function findPeakElement(nums: number[]): number {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
