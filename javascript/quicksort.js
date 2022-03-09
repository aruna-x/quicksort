function quicksort(array, low = 0, high = array.length-1) {
  if (low >= high) return array;

  let pIdx = partition(array, low, high);
  quicksort(array, low, pIdx-1);
  quicksort(array, pIdx+1, high);

  return array;
}

function partition(array, low, high) {
  while (low <= high) {
    let beforeHigh = high - 1;

    if (array[low] > array[high]) {
      [array[low], array[beforeHigh]] = [array[beforeHigh], array[low]];  
      [array[beforeHigh], array[high]] = [array[high], array[beforeHigh]];
      high--;
    } else {
      low ++;
    }
  }

  return high;
}

if (require.main === module) {

  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 3, 4]");
  console.log(quicksort([1, 2, 2, 3, 4]));

  console.log("");

  console.log("Expecting: []");
  console.log(quicksort([]));

  console.log("");

  console.log("Expecting: [1]");
  console.log(quicksort([1]));

  console.log("");

  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([4, 3, 2, 1]));
}

module.exports = quicksort;

/**
 * 1. paraphrase: implement quick sort
 * 2. tests: (above)
 * 3. pseudocode:
 * 
 * quicksort = recursively call on left and right arrays
 * partition = returns final index of pivot element
 * 
 * 4. code: (above)
 * 5. refactor:
 * 6. optimize:
 */


// The below solution isn't "in-place", whereas quicksort should be!

// function quicksort(array, low = 0, high = array.length - 1) {
//   if (array.length <= 1) return array;

//   let pivot = array[high];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i=low; i < array.length-1; i++) {
//     if (array[i] < pivot) {
//       leftArr.push(array[i]);
//     } else {
//       rightArr.push(array[i]);
//     }
//   }

//   return [...quicksort(leftArr), pivot, ...quicksort(rightArr)]

// }