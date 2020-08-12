DROP DATABASE IF EXISTS productDetails;

CREATE DATABASE productDetails;

USE productDetails;

CREATE TABLE products (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  productId int NOT NULL,
  productTitle VARCHAR(50),
  productDescription VARCHAR(800),
  price DECIMAL(6, 2),
  productDetails VARCHAR(60),
  productMaterial VARCHAR(60),
  reviewCount int,
  rating DECIMAL(3, 2)
);


