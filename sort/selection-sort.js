/*
  选择排序
  原理：首先在所有数字中，找出最小的部分，放到队首，然后找到倒数第二小的，放到第二个，一次类推
  复杂度：O(n^2)
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
  console.log(arr)
}

let data = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
selectionSort(data)
