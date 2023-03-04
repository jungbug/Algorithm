class Stack {

  constructor() {
    this.arr = []
  }

  push(data) {
    this.arr.push(data)
  }

  pop() {
    if (this.arr.length === 0) {
      console.log('false')
      return
    }
    return this.arr.pop()
  }

  get size() {
    return this.arr.length
  }

  get top() {
    return this.arr[this.arr.length - 1]
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()

stack.size

console.log(stack.size)