/*
Create a stack data structure. The stack should be a class with methods 'push', 'pop', and 'peek'. Adding and element to the stack should store it until it is removed.

*/

// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(data) {
//     this.stack.push(data);
//   }
//   pop() {
//     return this.stack.pop();
//   }
//   peek() {
//     if (this.stack.length > 0) {
//       return this.stack[this.stack.length - 1];
//     } else {
//       return "Empty Stack";
//     }
//   }
//   print() {
//     console.log(this.stack);
//   }
// }

function Stack() {
  this.stack = [];
}
Stack.prototype.push = function (data) {
  this.stack.push(data);
};
Stack.prototype.pop = function () {
  return this.stack.pop();
};
Stack.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};
Stack.prototype.print = function () {
  console.log(this.stack);
};

stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(5);
stack1.print();
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.peek());
stack1.print();
