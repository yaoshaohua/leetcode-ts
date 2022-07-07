/*
 * @Description: 

  5. 最长回文子串
  给你一个字符串 s，找到 s 中最长的回文子串。
  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。

 * @Author: ysh
 * @Date: 2022-07-05 05:47:59
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 15:08:38
 */

function longestPalindrome(s: string): string {
  let start = 0;
  let maxLen = 1;

  function expandAroundCenter(s: string, left: number, right: number): number {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length - 1; i++) {
    let oddLen = expandAroundCenter(s, i, i);
    let evenLen = expandAroundCenter(s, i, i + 1);
    let curMaxLen = Math.max(oddLen, evenLen);
    if (curMaxLen > maxLen) {
      maxLen = curMaxLen;
      start = i - Math.floor((maxLen - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
}
