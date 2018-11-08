/**
 * @name 冒泡排序 O(n^2)
 * @description1  比较相邻的两个元素，如果前一个比后一个大，则交换位置
 * @description2  第一轮的时候最后一个元素应该是最大的一个
 * @description3  按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较
 * @param {Array} arr 排序数组
 */
function bubbleSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

// 算法性能测试
let helper = new Helper(10000, 0, 10000)
helper.testSort(bubbleSort)
