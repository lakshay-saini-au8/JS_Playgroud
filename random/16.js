// create a weave type thing
class Queue {
  constructor() {
    this.data = [];
  }
  add(n) {
    this.data.unshift(n);
  }
  remove() {
    return this.data.pop();
  }
  print() {
    console.log(this.data);
  }
  peek() {
    return this.data[-1];
  }
  isEmpty() {
    return this.data.length === 0 ? true : false;
  }
}

q1 = new Queue();
q2 = new Queue();

// q1.add("You");
// q1.add("To");
q1.add("Hi");
q2.add(3);
q2.add(2);
q2.add(1);

function weave(q1, q2) {
  const result = new Queue();

  while (!q1.isEmpty() || !q2.isEmpty()) {
    if (!q1.isEmpty()) {
      let a = q1.remove();
      result.add(a);
    }

    if (!q2.isEmpty()) {
      let c = q2.remove();
      result.add(c);
    }
  }
  return result;
}

console.log(weave(q1, q2));
