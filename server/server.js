/**
 * Created by teacher on 17.04.2019.
 */
var port = 8001;
var http = require('http');
    http.createServer(function (req,res) {
        res.writeHead('Server');
        res.write('Hello');
        res.end(' WORLD');
        if (req){
            console.log('Send req');
        }
    }).listen(8025);
    console.log('Server is OK! \n port:' + port);