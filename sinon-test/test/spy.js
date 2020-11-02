const sinon = require('sinon'),
    Database = require('./db'),
    fs = require('fs'),
    database = new Database('./simple.json'),
    // fswirtespy = sinon.spy(fs, 'writeFile'),
    stub = sinon.stub(fs, 'writeFile', (file, data, cb) => {
        cb();
    }),
    saveDone = sinon.spy();
database.insert('name', 'cbws');
database.save(saveDone);
sinon.assert.calledOnce(stub);
sinon.assert.calledOnce(saveDone);
fs.writeFile.restore();