function stringRotation(s1, s2){
    return (s2+s2).includes(s1)
}


// True
console.log(stringRotation('waterbottle', 'erbottlewat'))

// False 
console.log(stringRotation('waterbottle', 'rbottlewat'))

// True
console.log(stringRotation('wawer', 'werwa'))




