const mysql = require('mysql');
const faker = require('faker');
const fs = require('fs');

const connection = mysql.createConnection({
  user: 'root',
  database: 'productDetails'
});

connection.connect((err) => {
  if(err) {
    console.log('db connection error- ', err);
  }
  console.log('db connected!');
});

const schemaQuery = fs.readFileSync(__dirname + '/schema.sql', 'utf-8').replace(/\r|\n/g, '');

connection.query(schemaQuery, (err) => {
  if(err) {
    console.log('error', err);
  }
  console.log('success');
});

//populate the db
for(var i = 0; i < 99; i++) {
  let productId = i + 1;
  let productTitle = faker.commerce.productName();
  let productDescription = faker.lorem.paragraph(3);
  let price = faker.finance.amount(10, 1000, 2);
  let productDetails = faker.company.bs();
  let productMaterial = faker.commerce.productMaterial();
  let reviewCount = faker.random.number(1000);
  let rating = faker.finance.amount(0, 5, 2);

  var query = `INSERT INTO products
              (productId, productTitle, productDescription, price, productDetails, productMaterial, reviewCount, rating)
              VALUES
              ('${productId}', '${productTitle}', '${productDescription}', '${price}', '${productDetails}', '${productMaterial}', '${reviewCount}', '${rating}')`;

  connection.query(query);
}