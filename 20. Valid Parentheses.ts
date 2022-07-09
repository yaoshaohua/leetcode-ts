/*
 * @Description: 

  20. 有效的括号
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
  有效字符串需满足：
    1.左括号必须用相同类型的右括号闭合。
    2.左括号必须以正确的顺序闭合。
  
  输入：s = "()"
  输出：true

 * @Author: ysh
 * @Date: 2022-07-09 18:23:57
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-09 19:20:41
 */

function isValid(s: string): boolean {
  const len = s.length;
  if (len % 2 === 1) return false;

  const m = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const arr: string[] = [];
  for (let i = 0; i < len; i++) {
    if (m.has(s[i])) {
      if (arr.length === 0 || m.get(s[i]) !== arr[arr.length - 1]) {
        return false;
      }
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return !arr.length;
}
