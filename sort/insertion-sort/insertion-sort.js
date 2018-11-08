/**
 * @name 简单插入排序 O(n^2)
 * @description 每一步将一个待排序的记录，插入到前面已经排好序的有序序列中去，直到插完所有元素为止。
 * @description 插入排序与选择排序最大的不同在于：第二重循环可以提前终止,但这并不代表这插入排序性能一定比选择排序好，因为交换很耗时，所以需要进行改进
 * @param {Array} arr 排序数组
 */
function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    // 寻找arr[i]合适的插入位置
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      let temp = arr[j - 1]
      arr[j - 1] = arr[j]
      arr[j] = temp
    }
  }
  return arr
}

/**
 * @name 改进插入排序 O(n^2)
 * @description 改进插入排序的重点在于减少交换元素位置，将交换元素位置改为直接赋值
 * @description 改进后的插入排序对于近乎于有序的数组，将变为O(n)级别算法
 * @param {Array} arr 排序数组
 */
function advanceInsertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    // 缓存arr[i]的值
    let temp = arr[i]
    // 将j拉到外层，方便最后获取j的值
    let j = i
    for (; j > 0 && temp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
  return arr
}

// 算法性能测试
let helper = new Helper(10000, 0, 10000)
helper.testSort(advanceInsertionSort)
