const fs = require('fs');
class Database {
    constructor(filename) {
        this.filename = filename
        this.data = {};
    }

    save(cb) {
        console.log('saving');
        fs.writeFile(this.filename, JSON.stringify(this.data), cb);
    }

    insert(key, value) {
        this.data[key] = value;
    }

}
module.exports = Database;