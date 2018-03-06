const fs = require('fs');
module.exports = function (done, arg) {
    let fileText = fs.readFile('./' + arg, (error, data) => {
        if (error) {
            done(error); 
        } else {
            done(data)
            //process.stdout.write('\n' + data);
        }
    });
};