class Stack {
    #arr: number[] = []
    push(X:number){
        this.#arr.push(X)
    }
    pop(){
        this.#arr.pop()
    }
    get size(){
        return this.#arr.length
    }
    empty(){
        if(this.#arr.length === 0) return 1
        return 0
    }
    top(){
        return this.#arr[this.#arr.length - 1]
    }
}

const stack = new Stack()

const result = []
const arr = [["push", 1]]

// for(let [k,v] of arr){
//     switch k {
//         case "push":
//             result.push(stack.push(v))
//             break
//         case "top":
//             stack.top
//             break
//         case "pop":
//             stack.pop()
//             break
//     }
// }

export{}