// linked list

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      let node = new Node(data, this.head);
      this.head = node;
    }
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp !== null) {
      count = count + 1;
      temp = temp.next;
    }
    console.log(count);
  }
  getFirst() {
    if (this.head === null) {
      console.log("List is Empty");
    } else {
      console.log(this.head.data);
    }
  }
  getLast() {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    console.log(temp.data);
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      console.log("List is Empty");
    } else {
      this.head = this.head.next;
    }
  }
  removeLast() {
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }
  insertLast(data) {
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = new Node(data);
  }
  print() {}
}

const list = new LinkedList();
list.insert(1);
list.insert(10);
list.insert(11);
list.insert(12);
list.insert(13);
list.insert(20);

list.size();
list.removeFirst();
list.size();
list.removeLast();
list.size();
list.insertLast("last");
list.getFirst();
list.getLast();

// console.log(list);
