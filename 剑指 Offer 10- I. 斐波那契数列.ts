/*
 * @Description:

  写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
  F(0) = 0,   F(1) = 1
  F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
  斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
  答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

  输入：n = 2
  输出：1

 * @Author: ysh
 * @Date: 2022-07-07 16:16:51
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 16:18:09
 */

function fib(n: number): number {
  const mod = Math.pow(10, 9) + 7; // 直接写 1000000007，效率贼低
  const dp: number[] = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % mod;
  }
  return dp[n];
}
