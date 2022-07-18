/*
 * @Description: 

  450. 删除二叉搜索树中的节点

  二叉搜索树有以下性质：
  左子树的所有节点（如果有）的值均小于当前节点的值；
  右子树的所有节点（如果有）的值均大于当前节点的值；
  左子树和右子树均为二叉搜索树

 * @Author: ysh
 * @Date: 2022-07-19 07:03:27
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-19 07:11:19
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  }
  if (root.val === key) {
    if (!root.left && !root.right) return null;
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let successor = root.right;
    while (successor.left) {
      successor = successor.left;
    }
    root.right = deleteNode(root.right, successor.val);
    successor.right = root.right;
    successor.left = root.left;
    return successor;
  }
  return root;
}
