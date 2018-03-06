//helper function
const done = (output) => {
    //show output
    process.stdout.write('\n' + output)
    //show prompt
    process.stdout.write('\nprompt > ');
};

//output
process.stdout.write('prompt > ');

//stdin
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');
    //command function variables
    const pwd = require("./pwd");
    const ls = require("./ls");
    const cat = require("./cat");
    const curl = require("./curl")
    //---------------------------

    process.stdout.write('You typed: ' + cmd[0]);

    if (cmd[0] === "pwd") {
        pwd(done);
    }

    if (cmd[0] === "ls") {
        ls(done);  
    }

    if (cmd[0] === "cat") {
        cat(done, cmd[1]); 
    }

    if (cmd[0] === "curl") {
        curl(cmd[1]) 
    }
});



