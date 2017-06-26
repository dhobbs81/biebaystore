DROP DATABASE IF EXISTS bieBay;
CREATE DATABASE bieBay;

USE bieBay;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  stock_quantity INT default 0,
  autographed BOOLEAN default false,
  PRIMARY KEY (item_id)
);

INSERT INTO bieBay.products VALUES
    (1, "Bieb's Tighty Whiteys", "Clothing", 12.99, 1000, 0),
    (2, "Bieb's Rag", "Clothing", 5.99, 666, 0),
    (3, "Bieb's Beer Koozie", "Kitchen", 3.99, 66, 0),
    (4, "Bieb's Dirt Bike", "Automotive", 6543.21, 10, 1),
    (5, "BieberInc", "Equities", 2000000000.0, 1, 1),
    (6, "Bieb's Cleanser", "Cleaning Supplies", 6.99, 100000, 0),
    (7, "Bieb's Candid Snaps", "Memorabilia", 39.99, 9999, 1),
    (8, "Bieb's Mic", "Audio", 299.99, 300, 0 ),
    (9, "Bieb's Toy Poodle", "Pet", 1200.0, 4, 1),
    (10, "Bieb's Talent", "Loss Prevention", 1.00, 1, 1)
