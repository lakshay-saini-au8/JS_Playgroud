/* to print an list element after 1 sec*/

const list = [1, 2, 3];
const square = (num, i) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000 * i);
  });
};

function test() {
  for (let i = 0; i < list.length; i++) {
    const hello = async (x, i) => {
      const res = await square(x, i + 1);
      console.log(res);
    };
    hello(list[i], i);
  }
}

test();
