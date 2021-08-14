function randomizeStrNames(num){
    const words = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
    }
    let ans = ""
    for(let i = 0; i < num.length; i++){
        ans += words[num[i]]
    }
    const a = ans.split('')
    for(let i = ans.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('')
}

function createNum(){
    let num = ""
    for(let i = 0; i < 10; i++){
        const amount = Math.floor(Math.random() * 50)
        const fifty = Math.floor(Math.random() * 2)
        if(fifty === 0){
            num += i.toString().repeat(amount)
        }
    }
    return [randomizeStrNames(num), num]
}

module.exports = {createNum}