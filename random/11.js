/* write a function that accepts a positive number N. the function should console log apyramid shap with N levels using the # character. */
const pyramid = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    let res = "";
    for (let j = n - (i + 1); j > 0; j--) {
      str = str + " ";
    }
    let l = 1;
    let k = 0;
    while (k < i + 1) {
      res = "#".repeat(k + l);
      k++;
      l++;
    }
    console.log(str + res);
  }
};

pyramid(5);
