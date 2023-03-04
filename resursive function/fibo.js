let arr = [0,1]

const fibo = (n) => {
    if(n == 0 ) return 0
    if(n == 1 ) return 1
    return  fibo(n-1) + fibo(n-2)
}

fibo(3)

// memoization , DP(Dynamic Programming)

let arr = [0, 1]

const fibo = (n) => {
    if(n === 0 || n === 1) return arr[n]
    else {
        if(isNaN(arr[n])){
            arr[n] = fibo(n - 1) + fibo(n - 2)
        }
        return arr[n]
    }
}

const res = fibo(500)