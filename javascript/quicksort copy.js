function quicksort(array, low=0, high=array.length-1) {
  if (low >= high) {
    return array;
  }

  const pivot = partition(array, low, high);
  quicksort(array, low, pivot-1);
  quicksort(array, pivot+1, high);

  return array;
}

function partition(array, low, high) {
  while (low <= high) {
    if (array[low] > array[high]) {
      [array[low], array[high-1]] = [array[high-1], array[low]];
      [array[high-1], array[high]] = [array[high], array[high-1]];
      high--;
    }
    else {
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

  console.log("Expecting: [1, 2, 3, 4, 5, 6, 7]");
  console.log(quicksort([2, 1, 6, 5, 4, 3, 7]));

  console.log("");

  // console.log("Expecting: []");
  // console.log(quicksort([]));

  // console.log("");

  // console.log("Expecting: [1]");
  // console.log(quicksort([1]));

  // console.log("");

  console.log("Expecting: [1, 2, 3, 4]");
  console.log(quicksort([4, 3, 2, 1]));
}

module.exports = quicksort;

/**
 * 
 */
