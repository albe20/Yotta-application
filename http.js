const http = require('http');

const server = http.createServer((req,res )=>{
 if (res.url==='./'){
     res.write('Hello world');
     res.end();
    } 
if (res.url==='/api/courses'){
        res.write(JSON.stringify ([ 1, 2, 3] ));
        res.end();
   }
});

server.listen(3000);

console.log('Listen on the port 3000,...'); 