/*
 * @Description:

  输入一个字符串，打印出该字符串中字符的所有排列。
  你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
  输入：s = "abc"
  输出：["abc","acb","bac","bca","cab","cba"]

 * @Author: ysh
 * @Date: 2022-07-07 16:32:20
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 19:13:59
 */

function permutation(s: string): string[] {
  const len = s.length;
  const arr = s.split("");
  const res: string[] = [];

  // 固定第 n 位
  function fix(n: number) {
    if (n === len - 1) {
      res.push(arr.join(""));
      return;
    }
    const vistited = new Map();
    for (let i = n; i < len; i++) {
      if (vistited.has(arr[i])) continue;
      vistited.set(arr[i], true);
      [arr[n], arr[i]] = [arr[i], arr[n]];
      fix(n + 1);
      [arr[n], arr[i]] = [arr[i], arr[n]];
    }
  }

  fix(0);
  return res;
}
