const csv = require('csvtojson');
const fs = require('fs');
const writeStream = fs.createWriteStream('datas/base.json');
csv()
    .fromFile('datas/comics.csv')
    .then((json)=>{
        fs.writeFileSync('datas/base.json', JSON.stringify(json), 'utf8');
    });
