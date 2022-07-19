/*
 * @Description: 

  887. 鸡蛋掉落

 * @Author: ysh
 * @Date: 2022-07-20 07:45:12
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-20 07:45:20
 */

function superEggDrop(k: number, n: number): number {
  const dp: number[][] = Array.from({ length: k + 1 }, () =>
    new Array(n + 1).fill(0)
  );
  // dp[i][j] i个鸡蛋 j次 可以测出来的最高楼层数
  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= k; i++) {
      dp[i][j] = 1 + dp[i - 1][j - 1] + dp[i][j - 1];
      if (dp[i][j] >= n) {
        return j;
      }
    }
  }
  return n;
}
