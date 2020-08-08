DROP DATABASE IF EXISTS productDetails;

CREATE DATABASE productDetails;

USE productDetails;

CREATE TABLE products (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  productId int NOT NULL,
  productTitle VARCHAR(50),
  productDescription VARCHAR(800),
  price DECIMAL,
  productDetails VARCHAR(60),
  productMaterial VARCHAR(60),
  reviewCount int,
  rating DOUBLE
);

-- INSERT INTO products (`productId`, `productTitle`, `productDescription`, `price`, `productDetails`, `productMaterial`, `reviewCount`, `rating`) VALUES (0, 'Celestial Harmony Sun & Moon Wall Décor', 'Add a touch of artistic charm to your home with the Design Toscano Celestial Harmony Sun and Moon Wall Decor. Designed by well-known artist Myers Hartley, this astounding sculpture represents the moon and the sun living together in harmony and hanging a balance. The Celestial Harmony Sun and Moon Wall Decor comes with durability that lasts for many decades. It is highly resistant to harsh UV rays and every form of fading. A gorgeous combination of ivory and gold completes this beautiful masterpiece. You can keep this statue looking brand new always, by keeping it indoors in freezing winters.', 68.98, 'Product Care: Store indoors during the winter season', 'Material: Resin/Plastic Material Details: Designer Resin', 696, 4.8);
