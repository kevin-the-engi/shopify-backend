DROP DATABASE IF EXISTS testdb;

CREATE DATABASE testdb;

\c testdb;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO testuser;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO testuser;

CREATE TABLE Warehouses (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE Inventory (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  warehouse_id INT,
  CONSTRAINT fk_warehouse
    FOREIGN KEY(warehouse_id) 
    REFERENCES warehouses(id)
);
