const hanoi = (n:number, a:string, b:string, c:string) => {
    if(n<1) return
    hanoi(n-1,a,c,b)
    console.log(`${n}번째 원반: ${a} -> ${c}`)
    hanoi(n-1,b,a,c)
}

hanoi(3,"A","B","C")