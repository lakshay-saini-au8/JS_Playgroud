/*
Create the function that takes an array with objects and returns the sum of people's budgets.

Examples
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

*/
// solution

const getBudgets = (arr) => arr.reduce((prev, item) => prev + item.budget, 0);
