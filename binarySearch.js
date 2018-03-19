
/**
 * 二分法查找
 * 
 * @param {any} list 
 * @param {any} item 
 * @returns 
 */
function binary_search(list, item) {
  let low = 0
  let high = list.length - 1
  while (low <= high) {
    const mid = low + high 
    const guess = list[mid]
    if (guess == item) {
        return mid
    } 
    if (guess > item) {
        high = mid - 1
    } else {
        low = mid + 1
    }
  }
  return null
}

const array = [1,2,3,4,5,7,8,9]
console.log(binary_search(array, 4))


