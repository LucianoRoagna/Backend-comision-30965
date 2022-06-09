-- Listar bases de datos

SHOW DATABASES;

-- Usar una base de datos

USE ecommerce

-- Crear tabla de productos

CREATE TABLE productos(
    id INT NOT NULL AUTO_INCREMENT,
    name CHAR(30),
    price FLOAT,
    description VARCHAR(255),
    stock INT
);

--Modificar tabla de productos y agregar llave foranea a categorias 

ALTER TABLE productos
ADD COLUMN categoria_id INT NULL,
ADD FOREIGN KEY (categoria_id_fk) REFERENCES categorias(id);

--Insertar productos

INSERT INTO productos(name,price,description,stock) VALUES('Coca cola',10.50,'Refresco',100);

--Listar registros

SELECT * FROM productos;

--Insertar categorias en una sola sentencia

INSERT INTO categorias (name) VALUES('Bebidas'),('Snacks');

--Actualizar registros

UPDATE productos SET categoria_id=1 WHERE id IN (1,2);
UPDATE productos SET categoria_id=2 WHERE name = "Marias"

--Borrar registros


