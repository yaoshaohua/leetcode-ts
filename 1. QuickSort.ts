function quickSort(nums: number[]): number[] {
  function help(nums: number[], left: number, right: number) {
    if (left >= right) return;
    let i = left,
      j = right,
      pivot = nums[left];
    while (i < j) {
      while (j > i && nums[j] >= pivot) {
        j--;
      }
      if (i < j) nums[i++] = nums[j];
      while (j > i && nums[i] <= pivot) {
        i++;
      }
      if (i < j) nums[j--] = nums[i];
    }
    nums[i] = pivot;
    help(nums, left, i - 1);
    help(nums, i + 1, right);
  }
  help(nums, 0, nums.length - 1);
  return nums;
}
