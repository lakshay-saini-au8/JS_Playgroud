// question:- https://www.hackerrank.com/challenges/js10-bitwise/problem
// solution

const getMaxLessThanK = (n, k) => {
  let result = [];
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let bitwise = i & j;
      if (bitwise < k) {
        result.push(bitwise);
      }
    }
  }

  return result.sort((a, b) => (a < b ? 1 : -1))[0];
};
