//output
process.stdout.write('prompt > ');

//stdin
process.stdin.on('data', (data) => {
    //command function variables
    const cmd = data.toString().trim();
    const pwd = require("./pwd");
    const ls = require("./ls");
    //---------------------------

    process.stdout.write('You typed: ' + cmd);

    if (cmd === "pwd") {
        pwd();
    }

    if (cmd === "ls") {
        ls();
    }

    // process.stdout.write('\nprompt > ');
});
