/* Print out the n-th entry in the fibonacci series.
[0,1,1,2,3,5,8,13,21,34........]
for exp fib(4) === 3
 */

// iterative way
// function fib(n) {
//   const arr = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     let a = arr[i - 2];
//     let b = arr[i - 1];
//     arr.push(a + b);
//   }
//   console.log(arr[n]);
// }

//recursion
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
console.log(fib(20));
