const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database');
const app = express();
const port = 9000;
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/products/:productId', express.static(path.join('./public')));

app.get('/product/:productId', (req, res) => {
  let id = req.params.productId;
  db.getProduct(id, (err, data) => {
    if(err) {
      console.log('getProduct error- ', err);
    }
    res.status(200);
    res.json(data);
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));