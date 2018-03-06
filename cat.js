const fs = require('fs');

module.exports = function (arg) {
    let fileText = fs.readFile('./' + arg, (error, data) => {
        if (error) {
            throw error; 
        } else {
            process.stdout.write('\n' + data);
            process.stdout.write('\nprompt > ');
        }
    });
};