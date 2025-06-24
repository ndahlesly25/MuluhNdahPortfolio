
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/send-message', (req, res) => {
  console.log('Message received:', req.body);
  res.send('Thank you for your message, ' + req.body.name + '!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
