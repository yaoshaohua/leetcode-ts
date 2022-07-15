/*
 * @Description: 

  593. 有效的正方形

  给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。
  点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。
  一个 有效的正方形 有四条等边和四个等角(90度角)。

  输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
  输出: True

 * @Author: ysh
 * @Date: 2022-07-15 06:44:53
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-15 06:45:05
 */

// 正方形特点：
//   1. 四条边都相等
//   2. 两条对角线相等
//   3. 任意两个点不可以重合
//  四个点枚举，判断一个点距离其他点的距离，存到 set 中，判断 set.size === 2 即可

function validSquare(
  p1: number[],
  p2: number[],
  p3: number[],
  p4: number[]
): boolean {
  const pointArr = [p1, p2, p3, p4];
  const distanceSet = new Set();

  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      const dis = getDistance(pointArr[i], pointArr[j]);
      if (dis === 0) return false;
      distanceSet.add(dis);
    }
  }
  return distanceSet.size === 2;

  function getDistance(p1: number[], p2: number[]) {
    return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
  }
}
