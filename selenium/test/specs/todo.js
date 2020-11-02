// const assert = require('assert');
// const webdriverio = require('webdriverio');

// describe('todo tests', () => {
//     let client;

//     before(() => {
//         client = webdriverio.remote();
//         console.log(client);
//         // return client.init();
//     });

//     it('todo list test', () => {
//         return client
//             .url('')
//             .getTitle()
//             .then(title => assert.equal(title, 'My to-do list'));
//     });
// });
describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:4000/')
        expect(browser).toHaveTitle('My to-do list');
    })
})