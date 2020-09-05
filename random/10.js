/*wrtie a function that accepts a possitive number N. The function should console log a step shape with N levels using the # charachter. Make sure the step has spaces on the right hand side  
setp(2)
//
#
##
###


*/
// using for loop
const steps = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(`${"# ".repeat(i + 1)}`);
  }
};

//  using recursion
const steps = (n) => {
  if (n === 0) return;
  steps(n - 1);
  console.log(`${"# ".repeat(n)}`);
};

steps(3);
