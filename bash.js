//output
process.stdout.write('prompt > ');

//stdin
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');
    //command function variables
    const pwd = require("./pwd");
    const ls = require("./ls");
    const cat = require("./cat");
    //---------------------------

    process.stdout.write('You typed: ' + cmd[0]);

    if (cmd[0] === "pwd") {
        pwd();
    }

    if (cmd[0] === "ls") {
        ls();
    }

    if (cmd[0] === "cat") {
        cat(cmd[1]);
    }

    // process.stdout.write('\nprompt > ');
});
