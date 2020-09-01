/* Given an array and chunk size, divide the array into many subarrays where each subarray is of length size */

function chunk(array, size) {
  result = [];
  noOfArr = Math.ceil(array.length / size);
  for (let i = 0; i < noOfArr; i++) {
    arr = [];
    for (let i = 0; i < size; i++) {
      popEle = array.shift();
      if (popEle) {
        arr.push(popEle);
      }
    }
    result.push(arr);
  }
  console.log(result);
}

chunk([1, 2, 3, 4, 5, 6, 8, 9], 3);
console.log(" ");
chunk([1, 2, 3, 4, 5], 2);
console.log(" ");
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(" ");
chunk([1, 2, 3, 4, 5], 4);
console.log(" ");
chunk([1, 2, 3, 4, 5], 10);
