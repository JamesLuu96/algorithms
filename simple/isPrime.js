function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
        console.log(i)
    }
    return num >= 2
}

function hisPrime(num){
    const gW = Math.floor(Math.sqrt(num))
    console.log(gW, Math.sqrt(num))
    for(let i = 2; i <= gW; i++){
        if(num % i === 0){
            return false
        }
        console.log(i)
    }
    return num >= 2
}

console.log(isPrime(149))
console.log(hisPrime(149))
