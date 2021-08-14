const { expect } = require('@jest/globals')
const shuffledString = require('../shuffledString')

const testCases = [
    ['', ''],
    ['ozonurnroefneneeio', '01149'],
    ['ohusineoxneiieernogntf', '114689'],
    ['ixiiiinirrhneeeeehefneenvnfgnineeonsineniifvennefhnouegxhiztvvstteeteeieirtssineinrneenhngrinoeetwtnoohgeou', '01123344556677888899999999'],
    ['eetrenregvtonnonnostzneeneehgeeinrozieonozheeeigineoininnoheeooen','00011111117888999'],
    ['zenoreo','01'],
    ['eisvnnenieenn','799'],
    ['xeieoiesutgeowiitveesefetnhsfrxiniiehinnunheonnrinhrwinoegsonetooriueenfiitgxnetixnfeeitoerxfgeihitnivtgheneehssnswevvt', '112223344455666667788888999999'],
    ['exigeenihnvfsinhtghevitiveseiingtigveesnefxieheenehnisetxegsnigeitgeehviniiitfntnxniishixesi','5556666677888888899999'],
    ['rzfeneenzgogtueoeowunrigwoenieoorfioteitoereeonewfefvtrorroieehrftfvirwiriegotnrhotnzrzooeeoerorfinvoghooeozeiinoouznezteeeeofzreerezhorozonhifeoewtounfvvzenriooifnznutzeounere', '0000000000000111111112222244444455555888889999']
]

testCases.forEach((x, i)=>{
    test(`Test Case ${i + 1}: `, ()=>{
        expect(shuffledString(x[0])).toBe(x[1])
    })
})


