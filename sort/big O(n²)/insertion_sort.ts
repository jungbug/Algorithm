const insertion_sort = (...arr:number[]) => {
    let key
    for(let i = 1;i<arr.length;i++){
        key = arr[i]
        let j = 0
        for(j = i - 1;j >=0;j--){
            if(arr[j] > key) {
                arr[j + 1] = arr[j]
                arr[j] = key
            }
        }
    }
    console.log(arr)
    return arr
}