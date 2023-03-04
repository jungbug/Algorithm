const quickSort = (arr:number[],l:number,r:number) => {
    const pivotIdx = Math.floor((l + r) / 2)
    const pivot = arr[pivotIdx]

    let left = l
    let right = r

    while(left <= right){
        while(arr[left] < pivot){
            left++
        }
        while(arr[right] > pivot){
            right--
        }
        if(left <= right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    if(l < right) quickSort(arr, l, right)
    if(r > left) quickSort(arr, left, r)

    return arr
}

const main = (arr:number[]) => {
    return quickSort(arr, 0, arr.length-1)
}

const test_arr = [3,4,1,6,2,5]

console.log(main(test_arr))