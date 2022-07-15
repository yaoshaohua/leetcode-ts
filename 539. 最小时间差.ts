/*
 * @Description:
 * @Author: ysh
 * @Date: 2022-07-15 07:56:03
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-15 08:01:21
 */

function findMinDifference(timePoints: string[]): number {
  // 1
  const total = 24 * 60;
  const len = timePoints.length;
  if (len > total) return 0;

  // 2
  const arr = timePoints.map((t) => {
    const a: string[] = t.split(":");
    return Number(a[0]) * 60 + Number(a[1]);
  });

  // 3
  arr.sort((a, b) => a - b);

  // 4
  let min = Infinity;
  for (let i = 1; i < len; i++) {
    min = Math.min(min, arr[i] - arr[i - 1]);
  }
  // 5
  return Math.min(min, arr[0] + total - arr[len - 1]);
}
