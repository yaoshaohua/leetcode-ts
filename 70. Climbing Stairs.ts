/*
 * @Description: 

  70. 爬楼梯
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

  输入：n = 2
  输出：2
  解释：有两种方法可以爬到楼顶。
  1. 1 阶 + 1 阶
  2. 2 阶

 * @Author: ysh
 * @Date: 2022-07-12 06:28:43
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-12 06:28:59
 */

// 时间复杂度 O(n), 空间复杂度 O(n)
function climbStairs(n: number): number {
  const dp: number[] = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// 时间复杂度 O(n), 空间复杂度 O(1)
function climbStairs2(n: number): number {
  if (n === 1) return 1;

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    [first, second] = [second, first + second];
  }

  return second;
}
