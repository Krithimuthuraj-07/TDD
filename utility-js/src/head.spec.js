const head = require('./head');

describe('Head', () => {

    it('First element of array [1,2,3] is 1', () => {
        expect(head([1,2,3,4])).toEqual(1)
    });

    it('First element of array [\'a\',\'b\',\'c\'] is \'a\'', () => {
        expect(head(['a','b','c'])).toEqual('a')
    });

    it('First element of array [\'a\',1,2] is \'a\'', () => {
        expect(head(['a',1,2])).toEqual('a')
    });

    it('First element of array [] is null/undefined', () => {
        expect(head([])).toEqual(null)
    });

})