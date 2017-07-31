var chalk = require('chalk');

// Output a prompt
process.stdout.write(chalk.yellow('prompt') + ' > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim().split(" "); // remove the newline
    //console.log(cmd[0]);
    var func = cmd[0];
    var inputVar = cmd.slice(1);

    var commands = require("./command")
    if (inputVar) commands[func](inputVar);
    else commands[func]();

});
