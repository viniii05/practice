const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("Vini Tamrakar");
})

server.listen(4000, () => {
    console.log(`server running on port ${4000}`);
})
