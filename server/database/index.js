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
  var query = ` SELECT *
                FROM products
                WHERE productId=${id};`;
  connection.query(query, (err, data) => {
    console.log('data- ', data);
    if(err) console.log('error in getProduct- ', err);
    callback(null, data);
  });
}

module.exports.getProduct = getProduct;