const filter = require('./filter')
const filterUpperCase = require('./filterUpperCase')

describe('Filter', () => {
    it('Output of [\'a\', \'B\',\'c\',\'D\'] is [\'B\',\'D\'] ', () => {
        expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D'])
    })

    it('Ouput of [1,2,3],x => true is [1,2,3]', () =>{
        expect(filter([1,2,3],x => true)).toEqual([1,2,3])
    })

    it('Ouput of [1,2,3],x => true is [1,2,3]', () =>{
        expect(filter([1,2,3],x => false)).toEqual([])
    })

    it('Ouput of [1,2,3],x => true is [1,2,3]', () =>{
        expect(filter([],x => true)).toEqual([])
    })

    it('Ouput of [1,2,3],x => true is [1,2,3]', () =>{
        expect(filter([1,2,3],x => x>1)).toEqual([2,3])
    })
})