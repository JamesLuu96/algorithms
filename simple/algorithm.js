var longestCommonPrefix = function(strs) {
    const sorted = strs.sort((a,b)=>a.length - b.length)
    for(let i = sorted[0].length - 1; i >= 0 ; i--){
        const x = sorted[0].slice(0, i + 1)
        if(sorted.every(word=>{
            return word.slice(0, i+1) === x
        })){
            return x
        }
    }
    return ""
};

console.log(longestCommonPrefix(["cog","cacecar","car"]))

