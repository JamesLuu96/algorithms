// Given a shuffled string of numbers that have been 
// spelled out, ex. "one", "two". Return a string of integers
// of all the numbers used in the string where the numbers 
// are ordered in ascending order. Numbers may be used more
// than once.

// "ozonurnroefneneeio" => "01149"

// function randomizeStrNames(num){
//     const words = {
//         "0": "zero",
//         "1": "one",
//         "2": "two",
//         "3": "three",
//         "4": "four",
//         "5": "five",
//         "6": "six",
//         "7": "seven",
//         "8": "eight",
//         "9": "nine",
//     }
//     let ans = ""
//     for(let i = 0; i < num.length; i++){
//         ans += words[num[i]]
//     }
//     const a = ans.split('')
//     for(let i = ans.length - 1; i >= 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         const tmp = a[i];
//         a[i] = a[j];
//         a[j] = tmp;
//     }
//     return a.join('')
// }

// console.log(randomizeStrNames('5556666677888888899999'))


module.exports = function shuffledString(str){
    
}
