import {lFilter, materialize} from '../../src/lazy'
import {gt} from 'tsfun'


/**
 * tsfun | lFilter
 */
describe('lFilter', () => {

    it('filter', () => expect(

        materialize(lFilter(gt(3))([4, 2, 1]))

    ).toEqual([4]))
})
