CREATE TABLE movies (
  id INTEGER NOT NULL AUTO_INCREMENT,
  movie_title VARCHAR(200) NULL,
  year VARCHAR(70) NULL,
  price INTEGER NULL,
  stock_quantity INTEGER NULL,
  PRIMARY KEY (id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Freddie Got Fingered", "2001", 2.99, 6);

SELECT * FROM products;