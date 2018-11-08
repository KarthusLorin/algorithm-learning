/**
 * @name 工具类
 * @description 用于生成实验数组，并校验排序的耗时与正确性
 */
class Helper {

  // 生成指定数组
  constructor (n, rangeL, rangeR) {
    this.arr = [];
    for (let i = 0; i < n; i++) {
      this.arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL);
    }
  }

  // 检查是否排序正确
  static isSorted (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  // 检测数组结果（时间、正确与否）
  testSort (cb) {
    console.time('sortTime')
    let copy = this.arr.slice(0)
    let sortArr = cb(copy)
    console.timeEnd('sortTime')
    if (Helper.isSorted(sortArr)) {
      console.log('排序成功！')
    } else {
      console.log('排序失败！')
    }
  }

}
