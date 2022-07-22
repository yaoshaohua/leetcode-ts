/*
 * @Description:

  迷路的机器人

 * @Author: ysh
 * @Date: 2022-07-22 07:12:49
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-22 08:16:10
 */
// 有问题的版本
function pathWithObstacles(obstacleGrid: number[][]): number[][] {
  const res: number[][] = [];
  let rows = obstacleGrid.length,
    cols = obstacleGrid[0].length;

  if (obstacleGrid[0][0] === 1 || obstacleGrid[rows - 1][cols - 1] === 1) {
    return res;
  }

  const dp: (number | boolean)[][] = Array.from(
    { length: rows },
    () => new Array(cols)
  );
  dp[0][0] = 1;

  // 初始化首列
  for (let r = 1; r < rows; r++) {
    dp[r][0] = obstacleGrid[r][0] === 0 && dp[r - 1][0];
  }
  // 初始化首行
  for (let c = 1; c < cols; c++) {
    dp[0][c] = obstacleGrid[0][c] === 0 && dp[0][c - 1];
  }
  // 计算路径
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      dp[r][c] = obstacleGrid[r][c] === 0 && (dp[r - 1][c] || dp[r][c - 1]);
    }
  }
  if (!dp[rows - 1][cols - 1]) return res;

  let r = rows - 1,
    c = cols - 1;
  while (r > 0 || c > 0) {
    res.push([r, c]);
    if (r > 0 && dp[r - 1][r]) {
      r--;
    } else {
      c--;
    }
  }
  res.push([0, 0]);
  res.reverse();
  return res;
}
