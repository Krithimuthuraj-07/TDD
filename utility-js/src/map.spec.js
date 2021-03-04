const map = require("./map")
const cube = require('./cube')
const identity = require('./identity')

describe('Map', () => {

    it('Cube of array [1,2,3] is [1,8,27]', () => {
        expect(map([1,2,3],cube)).toEqual([1,8,27])
    })

    it('Cube of array [] is []', () => {
        expect(map([],cube)).toEqual([])
    })

    it('Identity of array [1,2,3] is [1,2,3]', () => {
        expect(map([1,2,3],identity)).toEqual([1,2,3])
    })

    it('Output of element is x = 50 adding with 1 = 51', () => {
        expect(map([{x : 50}],someObject => someObject.x + 1)).toEqual([51])
    })
})