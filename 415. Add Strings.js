/*
 * @Description: 

  给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
  你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

  输入：num1 = "11", num2 = "123"
  输出："134"

 * @Author: ysh
 * @Date: 2022-07-08 07:36:22
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-08 08:05:46
 */

function addStrings(num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const ans = [];

  while (i >= 0 || j >= 0 || add !== 0) {
    let x = i >= 0 ? num1[i] - "0" : 0;
    let y = j >= 0 ? num2[j] - "0" : 0;
    let temp = x + y + add;
    ans.unshift(temp % 10);
    add = Math.floor(temp / 10);
    i--;
    j--;
  }
  return ans.join("");
}
