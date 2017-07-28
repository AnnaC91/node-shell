module.exports = {
    pwd: function(){
        process.stdout.write(process.cwd());
        process.stdout.write('\nprompt > ');
    },

    date: function(){
        var d = new Date();
        process.stdout.write(d.toString());
        process.stdout.write('\nprompt > ');
    },

    ls: function(){
        var fs = require('fs');
        var files = fs.readdirSync('.');
        process.stdout.write(files);
        process.stdout.write('\nprompt > ');
    }
}