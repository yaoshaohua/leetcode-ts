/*
 * @Description: 

  77. 组合
  给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
  输入：n = 4, k = 2
  输出：
  [
    [2,4],
    [3,4],
    [2,3],
    [1,2],
    [1,3],
    [1,4],
  ]

 * @Author: ysh
 * @Date: 2022-07-05 07:19:54
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-05 07:22:34
 */

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  backtracking();
  return res;

  function backtracking(start: number = 1, tempArr: number[] = []) {
    if (tempArr.length === k) {
      res.push([...tempArr]);
      return;
    }
    for (let i = start; i <= n; i++) {
      tempArr.push(i);
      backtracking(i + 1, tempArr);
      tempArr.pop();
    }
  }
}
