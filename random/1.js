// taks
/*
var data = [
    ["fruits","frozen","fresh","rotten"],
    ["apples",884,494,494],
    ["oranges",4848,494,4949],
    ["kiwi",848,33,33]
]

expected OUTPUT

[
    { fruits: 'apples', fresh: 494, frozen: 884, rotten: 494 },
    { fruits: 'oranges', fresh: 494, frozen: 4848, rotten: 4949 },
    { fruits: 'kiwi', fresh: 33, frozen: 848, rotten: 33 }
]
*/

// solution
let data = [
  ["fruits", "frozen", "fresh", "rotten"],
  ["apples", 884, 494, 494],
  ["oranges", 4884, 494, 4949],
  ["kiwi", 884, 333, 333],
];

let [cond, ...rest] = data;
let final = rest.map((item1) => {
  filterdata = {};
  cond.map((item2, index) => {
    filterdata[item2] = item1[index];
  });
  return filterdata;
});
console.log(final);
