const input = [1,2,3]

const getPowerset = (arr) => {
    const result = []
    let flag = new Array(arr.length).fill(false)

    const subset = function DFS(depth) {
        if(depth === arr.length){
            const res = arr.filter((_,index) => flag[index])
            result.push(res)
            return
        }
        flag[depth] = true
        subset(depth+1)

        flag[depth] = false
        subset(depth+1)
    }
    subset(0)
    return result
}

console.log(getPowerset(input))