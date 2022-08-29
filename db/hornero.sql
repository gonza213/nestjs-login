CREATE DATABASE hornero;

USE hornero;

CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(255),
    password VARCHAR(255),
    createdAt TIMESTAMP NULL,
    updateAt TIMESTAMP NULL,
);