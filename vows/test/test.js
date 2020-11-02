const vows = require('vows'),
    assert = require('assert');
vows.describe('tode').addBatch({
    'when add': {
        topic: () => {
            const todos = [];
            todos.push(1);
            return todos
        },
        'todes': (err, todos) => {
            assert.equal(todos.length, 3);
        }
    }
}).export(module);