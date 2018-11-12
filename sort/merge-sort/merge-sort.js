/**
 * @name 归并排序 O(nlogn)
 * @description
 * @param {Array} arr 排序数组
 */
function mergeSort (arr) {  // 采用自上而下的递归方法
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  // 放入最后的
  while (left.length) {
    result.push(left.shift())
  }

  // 放入最后的
  while (right.length) {
    result.push(right.shift())
  }

  return result
}

// 算法性能测试
let helper = new Helper(10000, 0, 10000)
helper.testSort(mergeSort)
