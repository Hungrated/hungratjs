let express = require('express');
let app = express();

app.get('/get', function (req, res) {
  res.send('get test successful');
});

app.post('/post', function (req, res) {
  res.send('post test successful: ' + JSON.stringify(req.body));
});

app.listen(9000);
