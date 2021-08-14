const trueNumber = require("../trueNumber")

const testCases = [
    ["0", false],
    ["1", false],
    ["00", false],
    ["2020", true],
    ["11", false],
    ["521001000", true],
    ["5210010000", false]
    ["42101000", true],
    ["1210", true],
    ["10", false],
    ["6210001000", true]
]

testCases.forEach((x, i)=>{
    test(`Test Case ${i + 1}: `, ()=>{
        expect(trueNumber(x[0])).toBe(x[1])
    })
})