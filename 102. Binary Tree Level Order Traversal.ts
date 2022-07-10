/*
 * @Description: 

  102. 二叉树的层序遍历
  给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

  输入：root = [3,9,20,null,null,15,7]
  输出：[[3],[9,20],[15,7]]

 * @Author: ysh
 * @Date: 2022-07-10 10:01:18
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-10 10:43:40
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 广度优先遍历 BFS
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const res: number[][] = [];
  const q: TreeNode[] = [root];
  while (q.length) {
    const size = q.length;
    const levelArr = [];
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      levelArr.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(levelArr);
  }
  return res;
}

// 深度优先遍历 DFS
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const res: number[][] = [];
  const dfs = (node: TreeNode, depth: number) => {
    if (node === null) return;
    if (res[depth]) {
      res[depth].push(node.val);
    } else {
      res[depth] = [node.val];
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root, 0);
  return res;
}
