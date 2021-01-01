/*
Array Methods
*/
const arr = ["deepak", "sagar", "frontbench"];

// @indexOf
// @desc find ele from array and return its position if not found return -1

console.log(arr.indexOf("deepak"));
console.log(arr.indexOf("Lakshay"));

// @pop
// @desc delete element from the last and return content

console.log(arr.pop());
console.log(arr);

// @push
// @desc append element in last and return the length

console.log(arr.push("frontbench"));
console.log(arr);

// @shift
// @desc remove element from starting

console.log(arr.shift());
console.log(arr);

// @unshift
// @desc insert ele in the starting of array and return length

console.log(arr.unshift("deepak"));
console.log(arr);

// @splice
// @desc splice have different use(showing after this), do all opertion inplace

// @desc remove element and return the remove element in arrya
console.log(arr.splice(0, 2));
console.log(arr);

// @desc add element in array
console.log(arr.splice(0, 0, "deepak", "sagar"));
console.log(arr);

// @slice
// @desc select part of an array and return its content
console.log(arr.slice(0, 2));
console.log(arr);

// @includes
// @desc check if array includes passed item or not

console.log(arr.includes("sagar"));
console.log(arr.includes("Lakshay"));

// @join
// @desc Used to join arr

const joinedStr = arr.join(" ");
console.log(joinedStr);

// @split
// split the array according to the argument passed

console.log(joinedStr.split(" "));

// @forEach
// @desc help you to loop over array's items

arr.forEach((item) => {
  console.log(item);
});

// @map
// @desc create new array with only elements passed condition inside the provided function

let newArr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
console.log(newArr);

// @concat
// @desc contact one array to other
console.log(newArr.concat(arr));

// @filter
// @desc create new array with only elements passed condition inside the provided function

const someArray = [
  { id: 1, name: "John" },
  { id: 2, name: "Smith" },
  { id: 3, name: "Bob" },
];
let filterArr = someArray.filter((item) => item.id === 1);
console.log(filterArr);

// @reduce
// @desc method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

const num = [1, 2, 3, 4, 5, 6];
const sum = num.reduce((acc, value) => acc + value, 0);
console.log(sum);

// @reverse
// @desc reverse the array

console.log(arr.reverse());
