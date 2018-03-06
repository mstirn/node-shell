//output
process.stdout.write('prompt > ');

//stdin
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    
    process.stdout.write('You typed: ' + cmd);

    if(cmd == "pwd") {
        process.stdout.write('\n' + process.cwd())
    }
    process.stdout.write('\nprompt > ');
})

// pwd output /Users/Matt/Developer/week2/node-shell
// process.stdin.on('pwd', () => {
//     process.stdou.write(process.cwd())
// })