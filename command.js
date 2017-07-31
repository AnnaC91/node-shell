var chalk = require('chalk');

var fs = require('fs');

module.exports = {
    pwd: function(){
        process.stdout.write(chalk.green(process.cwd()));
        process.stdout.write('\n' + chalk.yellow('prompt') + ' > ');
    },

    date: function(){
        var d = new Date();
        process.stdout.write(chalk.green(d.toString()));
        process.stdout.write('\n' + chalk.yellow('prompt') + ' > ');
    },

    ls: function(){
        fs.readdir('.',function(err,data) {
            if (err) process.stdout.write(err);
            else {
                process.stdout.write(chalk.green(data.toString()));
                process.stdout.write('\n' + chalk.yellow('prompt') + ' > ');
            }
        });
    },

    echo: function(input) {
        if (input.toString() === '$PATH') {
            process.stdout.write(chalk.green(process.env['PATH']));
        }
        else {
            process.stdout.write(chalk.green(input.join(" ")));
        }
        process.stdout.write('\n' + chalk.yellow('prompt') + ' > ');
    },

    cat: function(input) {
        fs.readFile(input.toString(), function(err,data) {
            if (err) process.stdout.write(err);
            else process.stdout.write(chalk.green(data.toString()));
        });
    },

    head: function(input) {
        fs.readFile(input.toString(), function(err,data) {
            if (err) {
                process.stdout.write(err);
            }
            else {
                var file = data.toString().split("\n").slice(0,10);

                process.stdout.write(chalk.green(file.join("\n")));
                process.stdout.write('\n' + chalk.yellow('prompt') + ' > ');
            }
        });
    },

    tail: function(input) {
        fs.readFile(input.toString(), function(err,data) {
            if (err) {
                process.stdout.write(err);
            }
            else {
                var file = data.toString().split("\n");
                var length = file.length;
                var abbrevFile = file.slice(file.length-10);

                process.stdout.write(chalk.green(abbrevFile.join("\n")));
                process.stdout.write('\n' + chalk.yellow('prompt') + ' > ');
            }
        });
    }
}
