const reduce = require('./reduce')


describe('Filter', () => {

    it('Ouput of adding empty array is null', () =>{
        expect(reduce([],(x,y)=>x+y)).toEqual(null)
    })

    it('Ouput of adding empty array start = 10 is 10', () =>{
        expect(reduce([],(x,y) => x+y,10)).toEqual(10)
    })

    it('Ouput of adding array[5,4] with start = null is 9', () =>{
        expect(reduce([5,4],(x,y) => x+y,null)).toEqual(9)
    })

    it('Ouput of adding empty array with start = null is null', () =>{
        expect(reduce([],(x,y) => x+y,null)).toEqual(null)
    })

    it('Adding / concatenating strings [\'a\', \'B\',\'c\']  = \"abc\" ', () =>{
        expect(reduce(['a','b','c'],(x,y) => x+y)).toEqual('abc')
    })

    it('Adding / concatenating strings [\'a\', \'B\',\'c\'] and \'z\' = \"zabc\" ', () =>{
        expect(reduce(['a','b','c'],(x,y)=>x+y,'z')).toEqual('zabc')
    })
    
})