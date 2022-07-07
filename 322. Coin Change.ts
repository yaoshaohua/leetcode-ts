/*
 * @Description: 

  322. 零钱兑换
  给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
  计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

  输入：coins = [1, 2, 5], amount = 11
  输出：3 
  解释：11 = 5 + 5 + 1

 * @Author: ysh
 * @Date: 2022-07-07 14:29:46
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 15:08:00
 */

function coinChange(coins: number[], amount: number): number {
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j]) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
