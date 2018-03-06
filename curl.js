let requestLibrary = require('request');
module.exports = (arg) => {
    requestLibrary(arg, (error, response, body) => {
        process.stdout.write('\n' + error + '\n' + response + "\n" + body);
    })
}