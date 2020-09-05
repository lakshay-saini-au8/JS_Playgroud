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
      res = "k".repeat(k + l);
      k++;
      l++;
    }
    console.log(str + res);
  }
};

pyramid(3);
