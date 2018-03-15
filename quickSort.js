function quickSort(array) {
  if (!Array.isArray(array)) {
    return
  }
  if (array.length < 2) {
    return array
  } else {
    let less = []
    let greater = []
    var pivotIndex = Math.floor(array.length / 2);
　　 var pivot = array.splice(pivotIndex, 1)[0];
    for(let i = 0; i < array.length; i ++){
      if (array[i] < pivot) {
        less.push(array[i])
      } else {
        greater.push(array[i])
      }
    }
    return quickSort(less).concat([pivot], quickSort(greater))
  }
}

console.log(quickSort([10, 5, 2, 3]))