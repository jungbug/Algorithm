const select_sort = (...arr:number[]) => {
    for(let i = 0;i<arr.length;i++){
        let min = 1000000
        for(let j = i;j<arr.length;j++){
            const cur = arr[j]
            if(cur < min){ min = cur }
        }
        [arr[arr.indexOf(min)], arr[i]] = [arr[i], arr[arr.indexOf(min)]]
    }
    console.log(arr)
    return arr
}