const http = require('http');
const fs = require('fs');

port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    if(req.url=== "/"){
        fs.readFile('index.html', function(err, date){
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(date)
            return res.end;
        });
    } else if (req.url === '/about'){
        fs.readFile('about.html', function(err, date){
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(date)
            return res.end;
        });
    } else if (req.url === '/contact-me'){
        fs.readFile('contact-me.html', function(err, date){
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(date)
            return res.end;
        });
    } else {
        fs.readFile('404.html', function(err, date){
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(date)
            return res.end;
        });
    }  
});

server.listen(port , () => {
    console.log(`Listening on port ${port}`);
});