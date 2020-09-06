const memdb = require('..'),
    assert = require('assert');
describe('memdb', () => {
    beforeEach(() => {
        memdb.clear();
    });
    describe('.saveSync(doc)', () => {
        it('should save the document', (done) => {
            const pet = { name: 'Dobi' };
            console.log(done);
            memdb.saveSync(pet, () => {
                const ret = memdb.first({ name: 'Dobi' });
                assert(ret == pet);
                done();
            });
        })
    })
});
// exports style
// module.exports = {
//     'memdb': {
//         '.saveSync(doc)': {
//             'should save the document': () => {
//                 console.log(1);
//             }
//         }
//     }
// }