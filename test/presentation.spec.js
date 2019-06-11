const datas = require('../datas/base');
const Lokijs = require('lokijs');


describe('demo', () => {

    it('lokijs', (done) => {
        let db = new Lokijs('db/test.json');

        done();
    });
});

/**
 {
                type: 'map',
                value: '[%lktxp]Mapper'
            }
 **/