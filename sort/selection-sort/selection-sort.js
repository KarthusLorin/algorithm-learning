/**
 * @name 选择排序 O(n^2)
 * @description 每一趟从待排序的数据元素中选择最小（或最大）的一个元素作为首元素，直到所有元素排完为止
 * @param {Array} arr 排序数组
 */
function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    // 寻找最小的值的索引
    let minIndex = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 交换位置
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

// 算法性能测试
let helper = new Helper(10000,0,10000)
helper.testSort(selectionSort)
