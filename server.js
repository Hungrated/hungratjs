let express = require('express');
let app = express();

console.log('http://localhost:9000/client.html');
app.use(express.static(__dirname));

app.get('/get', function (req, res) {
  console.log('get')
  res.send('get test successful');
});

app.post('/post', function (req, res) {
  console.log('post');
  res.send('post test successful: ' + JSON.stringify(req.body));
});

app.listen(9000);
