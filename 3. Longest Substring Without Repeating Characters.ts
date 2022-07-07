/*
 * @Description:
 * @Author: ysh
 * @Date: 2022-07-07 19:23:25
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 19:37:56
 */
function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  if (len <= 1) return len;

  let maxLen = 1;
  const m = new Map();

  for (let left = 0, right = 0; right < len; right++) {
    if (m.has(s[right])) {
      left = Math.max(left, m.get(s[right]) + 1);
    }
    m.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
