const max = require('./max')


describe('Max', () => {
    
    it('Maximum Element in array [1,2,3,4] is 4', () =>{
        expect(max([1,2,3,4])).toEqual(4)
    })

    it('Maximum Element in array [] is null', () =>{
        expect(max([])).toEqual(null)
    })

    it('Maximum Element in array [100] is 100', () =>{
        expect(max([100])).toEqual(100)
    })

    it('Maximum Element in array [1,1] is 1', () =>{
        expect(max([1,1])).toEqual(1)
    })

})