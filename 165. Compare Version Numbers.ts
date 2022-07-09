/*
 * @Description: 

  165.比较版本号
  输入：version1 = "1.01", version2 = "1.001"
  输出：0
  解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

  输入：version1 = "1.0", version2 = "1.0.0"
  输出：0
  解释：version1 没有指定下标为 2 的修订号，即视为 "0"

  输入：version1 = "0.1", version2 = "1.1"
  输出：-1
  解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2

 * @Author: ysh
 * @Date: 2022-07-08 06:54:43
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-08 06:55:34
 */

function compareVersion(version1: string, version2: string): number {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  for (let i = 0; i < v1.length || i < v2.length; i++) {
    let m = i < v1.length ? parseInt(v1[i]) : 0;
    let n = i < v2.length ? parseInt(v2[i]) : 0;
    if (m > n) return 1;
    if (m < n) return -1;
  }
  return 0;
}
