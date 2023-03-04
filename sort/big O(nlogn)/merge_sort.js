const merge = (leftArr, rightArr) => {
    let temp = []
    while(leftArr.length > 0 && rightArr.length > 0){
        if(leftArr[0] > rightArr[0]){
            temp.push(rightArr.shift())
        } else{
            temp.push(leftArr.shift())
        }
    }
    console.log(leftArr)
    while(leftArr.length > 0) temp.push(leftArr.shift())
    while(rightArr.length > 0) temp.push(rightArr.shift())
    return temp
}

const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid)
    let rightArr = arr.slice(mid, arr.length)
    return merge(
        mergeSort(leftArr), mergeSort(rightArr)
    )
}


const a = mergeSort([3, 1, 4, 2])
console.log(a)