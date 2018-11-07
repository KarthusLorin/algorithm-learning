/**
 * @name 选择排序
 * @description 首先在所有数字中，找出最小的部分，放到队首，然后找到倒数第二小的，放到第二个，以此类推
 * @param {Array} arr 排序数组
 */
let helper = new Helper(10000,0,10000)

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
}

helper.testSort(selectionSort)
