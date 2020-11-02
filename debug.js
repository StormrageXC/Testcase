// const fs = require('fs'),
//     debuglog = require('util').debuglog('hello');
// debuglog('hello');
// console.log(process.debuglog);
var assert = require('assert');

function square(a) {
    return a * a;
}


assert.equal(square(4), 16); //<co id="callout-testing-travis-test-1" />

// function a() {
//     setTimeout(() => {
//         throw new Error("hi");
//     })
// }
// a()