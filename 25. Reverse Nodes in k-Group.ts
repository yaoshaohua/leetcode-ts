/*
 * @Description: 

  25. K 个一组翻转链表
  
 * @Author: ysh
 * @Date: 2022-07-19 07:16:26
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-19 07:40:40
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy_node = new ListNode(-1);
  dummy_node.next = head;
  let pre = dummy_node;

  const stack = [];

  while (true) {
    let count = 0;
    let tmp = head;
    while (tmp && count < k) {
      stack.push(tmp);
      tmp = tmp.next;
      count++;
    }
    if (count !== k) {
      pre.next = head;
      break;
    }
    while (stack.length) {
      pre.next = stack.pop();
      pre = pre.next;
    }
    pre.next = tmp;
    head = tmp;
  }
  return dummy_node.next;
}
