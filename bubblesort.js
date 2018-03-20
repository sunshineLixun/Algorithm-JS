function bubbleSort(array) {
 if (!Array.isArray(array)) return

 let T = 0;
 for (let index = 0; index < array.length - 1; index++) {
   for (let j = 0; j < array.length -1; j++) {
     if (array[j] > array[j + 1]) {
       T = array[j]
       array[j] = array[j + 1]
       array[j + 1] = T
     }
   }
 }
 return array
}


console.log(bubbleSort([2,3,1,4,6,5,9,8,7,0]))