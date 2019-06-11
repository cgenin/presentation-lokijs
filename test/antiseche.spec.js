const datas = require('../datas/base');
const Lokijs = require('lokijs');


describe('demo', () => {

    it('lokijs', (done) => {
        //first creation
        const db = new Lokijs('db/loki.json', { autosave: true });
        const collTest = db.addCollection('test');
        collTest.insert({ test: true });
        // Exemple de mise à jour
        // let newVar = collTest.get(1);
        // newVar.test = false;
        // collTest.update(newVar)
        // console.log(newVar)

        const characters = db.addCollection('characters');
        characters.clear();
        characters.insert(datas);

        // console.log( characters.get(2))
        // console.log(characters.where(c => c.name.indexOf('Loki') !== -1))
        // console.log(characters.extract('year'))
        // console.log(characters.min('year'))
        //  console.log(collection.find({'year':1978, ALIGN:'good'}));

        /*
        characters.addTransform('example', [
            {
                type: 'find',
                value: {
                    'year': 1978
                }
            },
            {
                type: 'map',
                value: '[%lktxp]Mapper'
            }
        ]);

        console.log(characters.chain('example', {
            Mapper: (o) => ({name:o.name.toUpperCase()})
        }).data().slice(0,4))

        console.log(characters.data.slice(0,4))

         */

        db.saveDatabase();
        done();
    });
});