const tail = require('./tail');

describe('Tail', () => {

    it('Tail element of [1,2,3,4] is [2,3,4]', () => {
        expect(tail([1,2,3,4])).toEqual([2,3,4])
    });

    it('Tail element of [1] is []', () => {
        expect(tail([1])).toEqual([])
    });

    it('Tail element of [] is []', () => {
        expect(tail([])).toEqual([])
    });

})
