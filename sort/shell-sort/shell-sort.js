/**
 * @name 希尔排序 O(n^2)
 * @description 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止
 * @param {Array} arr 排序数组
 */
function shellSort (arr) {
  let len = arr.length
  let gap = Math.floor(len / 2)
  while (gap) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i]
      let j
      for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

// 算法性能测试
let helper = new Helper(10000, 0, 10000)
helper.testSort(shellSort)
