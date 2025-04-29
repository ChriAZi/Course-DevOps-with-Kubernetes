import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(`<!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Hello</title>
                </head>
                <body>
                    <h1>Hello, World!</h1>
                </body>
            </html>`);
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
