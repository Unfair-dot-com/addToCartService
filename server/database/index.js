const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'productDetails'
});

connection.connect((err) => {
  if(err) console.log('db connection error- ', err);
  console.log('db connected!');
});

const getProduct = (id, callback) => {
  connection.query(`SELECT (productId, productTitle, productDescription, price, productDetails, productMaterial, reviewCount, rating) FROM products WHERE productId='${id}';`, (err, data) => {
    if(err) console.log('error in getProduct- ', err);
    callback(null, data);
  });
}

module.exports.getProduct = getProduct;