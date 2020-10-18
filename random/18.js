/* Implement Queue using two stack*/

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  add(data) {
    this.stack1.push(data);
  }
  remove() {
    if (this.stack2.length > 0) {
      return this.stack2.pop();
    } else {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
  }
  peek() {
    if (this.stack1.length > 0) {
      return this.stack1[this.stack1.length - 1];
    } else {
      return this.stack2[this.stack2.length - 1];
    }
  }
}
q1 = new Queue();
q1.add(2);
q1.add(4);
q1.add(5);
q1.add(6);
console.log(q1.remove());
console.log(q1.remove());
console.log(q1.peek());
