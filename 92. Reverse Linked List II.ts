/*
 * @Description: 

  92. 反转链表 II
  给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。
  请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

  输入：head = [1,2,3,4,5], left = 2, right = 4
  输出：[1,4,3,2,5]

  输入：head = [5], left = 1, right = 1
  输出：[5]

 * @Author: ysh
 * @Date: 2022-07-12 06:44:29
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-12 06:44:36
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;

  let pre = dummy_node;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; i++) {
    let next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }
  return dummy_node.next;
}
