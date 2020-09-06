const db = [];
exports.saveSync = (doc, cb) => {
    db.push(doc);
    cb && setTimeout(() => {
        cb();
    }, 2000)
}
exports.first = (doc) => {
    return db.filter(item => {
        for (const key in doc) {
            if (doc[key] != item[key]) {
                return false
            }
        }
        return true;
    }).shift()
}
exports.clear = (doc) => {
    db.length = 0;
}