/*
 * @Description: 

  200. 岛屿数量
  
 * @Author: ysh
 * @Date: 2022-07-14 07:40:30
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-14 07:42:27
 */

function numIslands(grid: string[][]): number {
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        count++;
        turnZero(grid, i, j);
      }
    }
  }
  // 深度优先搜索 将岛屿沉海
  function turnZero(grid: string[][], i: number, j: number) {
    const m = grid.length;
    const n = grid[0].length;
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return;
    grid[i][j] = "0";
    turnZero(grid, i + 1, j);
    turnZero(grid, i - 1, j);
    turnZero(grid, i, j + 1);
    turnZero(grid, i, j - 1);
  }
  return count;
}
