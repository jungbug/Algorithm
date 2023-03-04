const N = 4, M = 2

const output:number[] = []
let result = ""
let visited = new Array(N+1).fill(0)

function bt(idx:number, k:number){
    if(idx === M){
        result += output.join(" ") + "\n"
        return
    }
    for(let i = k; i<=N;i++){
        if(visited[i]) continue
            visited[i] = 1
            output.push(i)
            bt(idx+1, i)
            output.pop()
            visited[i] = 0
    }
    return result
}

console.log(bt(0, 1))

export{}