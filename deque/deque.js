class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }
  push_back(item) {
    this.arr[this.tail++] = item;
  }
  pop_front() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[this.head++];
      return result;
    }
  }
  pop_back() {
    if (this.head >= this.tail) {
      return null;
    } else {
      const result = this.arr[--this.tail];
      return result;
    }
  }
  front() {
    return this.arr[this.head]
  }
  back() {
    return this.arr[this.tail - 1]
  }
}

let deque = new Deque();
