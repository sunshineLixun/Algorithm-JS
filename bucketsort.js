
/**
 * 桶排序
 * 
 * @returns 
 */
function bucketsort() {
  if (!Array.isArray(list)) return;

  let arrayA = []
  let arrayC = []

 for (let index = 0; index < 10; index++) {
   arrayA[index] = 0
 }

 list.forEach(element => {
  if (element == undefined || element == null) return
  
  if (arrayA[element] != undefined || arrayA[element] != null) {
    arrayA[element] += 1
  } else {
    arrayA[element] = 0
  }
 })

 return arrayA.map((item, index) => {
   if (item > 0) return index
 })
 
}

console.log(bucketsort([2,3,1,4,6,5,9,8,7,0]))