/*
 * @Description:

  718. 最长重复子数组
  给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度
  输入：nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
  输出：3
  解释：长度最长的公共子数组是 [3,2,1] 

 * @Author: ysh
 * @Date: 2022-07-07 15:05:20
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 16:07:20
 */

function findLength(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const dp = Array.from({ length: len1 }, () => {
    return new Array(len2).fill(0);
  });
  let maxLen = 0;

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (nums1[i] === nums2[j]) {
        if (i - 1 < 0 || j - 1 < 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = 1 + dp[i - 1][j - 1];
        }
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen;
}
