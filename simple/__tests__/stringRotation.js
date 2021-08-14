const stringRotation = require('../stringRotation')

const testCases = [
    
]

testCases.forEach((x, i)=>{
    test(`Test Case ${i + 1}`, ()=>{
        expect(x[0], x[1]).toBe(x[2])
    })
})