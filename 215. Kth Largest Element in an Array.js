/*
 * @Description: 

  215. 数组中的第K个最大元素
  给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
  请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

  输入: [3,2,1,5,6,4] 和 k = 2
  输出: 5

 * @Author: ysh
 * @Date: 2022-07-06 05:50:59
 * @LastEditors: ysh
 * @LastEditTime: 2022-07-07 15:09:24
 */

function findKthLargest(nums, k) {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);

  for (let i = nums.length - 1; i > nums.length - k; i--) {
    swap(nums, i, 0);
    heapSize--;
    heapify(nums, heapSize, 0);
  }

  return nums[0];

  function buildMaxHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      heapify(nums, heapSize, i);
    }
  }

  function heapify(nums, heapSize, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapSize && nums[largest] < nums[left]) {
      largest = left;
    }
    if (right < heapSize && nums[largest] < nums[right]) {
      largest = right;
    }
    if (largest !== i) {
      swap(nums, largest, i);
      heapify(nums, heapSize, largest);
    }
  }

  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}
