const sum = require("./sum.js")

describe('sum tests', () => {
    it('when 1 and 1 return 2', () => {


        // arrange

        const n1 = 1
        const n2 = 2
        const n3 = 2
        const expected = 2
        // act

        const actual = sum (n1, n2, n3)
        // assert

        expect(actual).toBe(expected)
    })
})