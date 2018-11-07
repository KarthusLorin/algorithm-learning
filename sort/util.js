/**
 * @name 工具类
 * @description 用于生成实验数组，并校验排序的耗时与正确性
 */
class Helper {

  constructor (n, rangeL, rangeR) {
    this.arr = [];
    for (let i = 0; i < n; i++) {
      this.arr[i] = parseInt(Math.random() * (rangeR - rangeL + 1) + rangeL);
    }
  }

  isSorted () {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > this.arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  testSort (cb) {
    console.time('sortTime')
    let sortArr = cb(this.arr)
    console.timeEnd('sortTime')
    if (this.isSorted(sortArr)) {
      console.log('排序成功！')
    } else {
      console.log('排序失败！')
    }
  }
}
