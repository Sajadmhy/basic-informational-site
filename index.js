const express = require('express')
const path = require('path')

const app = express();
port = process.env.PORT || 8080

// const http = require('http');
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//     if(req.url=== "/"){
//         fs.readFile('index.html', function(err, data){
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data)
//             return res.end;
//         });
//     } else if (req.url === '/about'){
//         fs.readFile('about.html', function(err, data){
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data)
//             return res.end;
//         });
//     } else if (req.url === '/contact-me'){
//         fs.readFile('contact-me.html', function(err, data){
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data)
//             return res.end;
//         });
//     } else {
//         fs.readFile('404.html', function(err, data){
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data)
//             return res.end;
//         });
//     }  
// });

// server.listen(port , () => {
//     console.log(`Listening on port ${port}`);
// });

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/contact-me', (req,res) => {
    res.sendFile(path.join(__dirname,'contact-me.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname,'about.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'404.html'));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});