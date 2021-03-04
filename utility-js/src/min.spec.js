const min = require('./min')


describe('MinimumOfArray', () => {
    
    it('Minimum Element in array [1,2,3,4] is 1', () =>{
        expect(min([1,2,3,4])).toEqual(1)
    })

    it('Minimum Element in array [] is null', () =>{
        expect(min([])).toEqual(null)
    })

    it('Minimum Element in array [10,10] is 10', () =>{
        expect(min([10,10])).toEqual(10)
    })

    it('Minimum Element in array [100] is 100', () =>{
        expect(min([100])).toEqual(100)
    })

})