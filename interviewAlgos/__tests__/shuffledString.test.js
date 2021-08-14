const shuffledString = require('../shuffledString')
const {createNum} = require('../testCaseBuilder/shuffledStringBuilder')

const testCases = [
    ['', ''],
    ['ozonurnroefneneeio', '01149'],
    ['ohusineoxneiieernogntf', '114689'],
    ['ixiiiinirrhneeeeehefneenvnfgnineeonsineniifvennefhnouegxhiztvvstteeteeieirtssineinrneenhngrinoeetwtnoohgeou', '01123344556677888899999999'],
    ['eetrenregvtonnonnostzneeneehgeeinrozieonozheeeigineoininnoheeooen','00011111117888999'],
    ['zenoreo','01'],
    ['eisvnnenieenn','799'],
    ['xeieoiesutgeowiitveesefetnhsfrxiniiehinnunheonnrinhrwinoegsonetooriueenfiitgxnetixnfeeitoerxfgeihitnivtgheneehssnswevvt', '112223344455666667788888999999'],
    ['exigeenihnvfsinhtghevitiveseiingtigveesnefxieheenehnisetxegsnigeitgeehviniiitfntnxniishixesi','5556666677888888899999']
]

// Extra Test Cases

for(let i = 0; i < 200; i++){
    testCases.push(createNum())
}

testCases.forEach((x, i)=>{
    test(`Test Case ${i + 1}: `, ()=>{
        expect(shuffledString(x[0])).toBe(x[1])
    })
})


