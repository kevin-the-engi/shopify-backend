DROP DATABASE IF EXISTS testdb;

CREATE DATABASE testdb;

\c testdb;

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
