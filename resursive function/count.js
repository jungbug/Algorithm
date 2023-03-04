let obj = {}

const count = (str, i) => {
    if(str.length === i){
        return
    }
    const key = str[i]
    if(obj[key]){
        obj[key] += 1
    }else{
        obj[key] = 1
    }
    count(str, i+1)
}

count("aBBEWCG", 0)


console.log(obj)