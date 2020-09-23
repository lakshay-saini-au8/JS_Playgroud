/*
Create a queue data structure. The queue should be a class with methods "add" and "remove". Adding to the queue should store an element until it is removed
*/
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
}

q1 = new Queue();
q1.add(2);
q1.add(4);
q1.add(5);
q1.add(6);
q1.print();
q1.remove();
q1.remove();
q1.print();
