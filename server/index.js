const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/productId', (req, res) => {
  // db.getProduct(, (err, data) => {
  //   if(err) console.log('getProduct error- ', err);
  //   res.status(200);
  //   res.json(data);
  // })
  res.send('hello');
})

app.listen(port, () => console.log(`listening on port ${port}`));