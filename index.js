const http = require('http');

const app  = http.createServer((req, res)=> {
    res.end('Hello, World!');
})
let port = process.env.PORT || 3000
const server = app.listen(port);