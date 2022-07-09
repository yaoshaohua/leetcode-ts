/*
 * @Description: 

  129. 求根节点到叶节点数字之和
  给你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。
  每条从根节点到叶节点的路径都代表一个数字：

  例如，从根节点到叶节点的路径 1 -> 2 -> 3 表示数字 123 。
  计算从根节点到叶节点生成的 所有数字之和 。

  输入：root = [1,2,3]
  输出：25
  解释：
  从根到叶子节点路径 1->2 代表数字 12
  从根到叶子节点路径 1->3 代表数字 13
  因此，数字总和 = 12 + 13 = 25

 * @Author: ysh
 * @Date: 2022-07-09 20:36:59
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-09 20:37:06
 */

function sumNumbers(root) {
  function dfs(node, prevSum) {
    if (node === null) return 0;
    let sum = prevSum * 10 + node.val;
    if (node.left === null && node.right === null) {
      return sum;
    } else {
      return dfs(node.left, sum) + dfs(node.right, sum);
    }
  }
  return dfs(root, 0);
}
