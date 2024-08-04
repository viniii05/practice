const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/home') {
    res.write('<html>')
    res.write('<head><title>my node project</title></head>')
    res.write('<body><h1>Welcome home</h1></body>')
    res.write('</html>')
    res.end();
  } 
  else if (url === '/about') {
    res.write('<html>')
    res.write('<head><title>my node project</title></head>')
    res.write('<body><h1>Welcome to About Us page</h1></body>')
    res.write('</html>')
    res.end()
  } 
  else if (url === '/node') {
    res.write('<html>')
    res.write('<head><title>my node project</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end()
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
