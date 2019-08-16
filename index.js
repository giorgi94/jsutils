const array = require('./src/array.js');
const emoji = require('./src/emoji.js');
const html = require('./src/html.js');
const ismobile = require('./src/ismobile.js');
const querystring = require('./src/query-string.js');
const timing = require('./src/timing.js');


module.exports = {
    ...array,
    ...emoji,
    ...html,
    ...ismobile,
    ...querystring,
    ...timing,
}
