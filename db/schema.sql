-- Drops Database if it exists--
DROP DATABASE IF EXISTS burgers;
-- Creates database--
CREATE DATABASE burgers;
-- Create Table using Burgers database--
USE burgers;
CREATE TABLE burgers_db (
    id INT AUTO_INCREMENT NOT NULL, 
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
