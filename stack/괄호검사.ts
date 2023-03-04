class Stack {
    arr: string[]

    constructor(){
        this.arr = []
    }

    push(value:string){
        this.arr.push(value)
    }

    pop(){
        return this.arr.pop()
    }

    get top(){
        return this.arr[this.arr.length - 1]
    }

    get len(){
        return this.arr.length
    }
}

const stack = new Stack()


const checkComb = (str:string):boolean => {
    const arr = str.split("")
    const re = /[\(\{\[]/
    const re2 = /[\)\}\]]/
    const obj = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let i = 0; i< arr.length;i++){
        const v = arr[i]
        if(v.search(re) > -1){
            stack.push(v)
        }else if(v.search(re2) > -1){
            let data = stack.pop()
            //@ts-ignore
            if(obj[data] !== v){
                return false
            }
            //@ts-ignore
            stack.push(data)
        }
    }
    if(stack.len) return false
    return true
}

let str = "(hello world)[][this is stack]()"
console.log(checkComb(str))


export{}