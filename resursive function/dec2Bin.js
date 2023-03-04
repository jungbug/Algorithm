const dec2Bin = (num) => {
    if(num === 1){
        return
    }
    num % 2
    dec2Bin(Math.floor(num / 2))
    return 
}

dec2Bin(7)

// 7 -> 1
// 3-> 1
// 1