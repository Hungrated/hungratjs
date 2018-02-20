const fs = require('fs');

const writeFile = function (path, str) {
  fs.writeFile(path, str, function (err) {
    if (err) {
      throw err;
    }
    console.log('output: ' + path);
  });
};

const createTestClient = function (_compressedJs, _testJs) {
  // language=HTML
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>TEST_ENV</title>` +
    `<style>*{margin: 0;padding: 0}</style>` +
    `</head><body><script>${_compressedJs}</script><script>${_testJs}</script></body></html>`;
};

const createTestServer = function () {
  // language=JavaScript
  return `let express = require('express');
  let app = express();

  console.log('http://localhost:9000/test_client.html');
  console.log('http://localhost:9000/docs/index.html');
  app.use(express.static(__dirname));

  app.get('/get', function (req, res) {
    console.log('get');
    res.json({
      msg: 'get test successful'
    });
  });

  app.post('/post', function (req, res) {
    console.log('post');
    console.log(req.body);
    res.json(req.body);
  });
  app.listen(9000);`;
};

const compressedJs = fs.readFileSync('dist/js-common-tools.js').toString();

const testJs = fs.readFileSync('./test_body.js').toString().split('/* test start */')[1];

const clientHtml = createTestClient(compressedJs, testJs);

const serverJs = createTestServer();

writeFile('dist/test_client.html', clientHtml);

writeFile('dist/test_server.js', serverJs);
