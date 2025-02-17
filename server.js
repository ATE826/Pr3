const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Обработка запроса на index.html
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading the file');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }
  // Обработка запроса на CSS файл
  else if (req.url === '/dist/styles.css') { // Здесь нужно использовать правильный путь
    fs.readFile(path.join(__dirname, 'dist', 'styles.css'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading the CSS file');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(data);
      }
    });
  }
  // Обработка ошибки 404
  else {
    // Отправка страницы с ошибкой 404
    fs.readFile(path.join(__dirname, '404.html'), 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error reading the 404 page');
      } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);  // Отправляем страницу с ошибкой 404
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
